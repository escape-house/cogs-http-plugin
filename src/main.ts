import { CogsConnection } from "@clockworkdog/cogs-client";

import * as manifest from "./cogs-plugin-manifest.js";

const cogsConnection = new CogsConnection(manifest);

cogsConnection.addEventListener("event", async ({ name, value }) => {
  let method;
  switch (name) {
    case "GetRequest": method = "GET"
      break;
    case "PostRequest": method = "POST"
      break;
    case "PutRequest": method = "PUT"
      break;
    case "DeleteRequest": method = "DELETE"
      break;
    default:
      return
  }

  try {
    let request;
    if (method === "GET") {
        request = {
          method: method,
          headers: JSON.parse(cogsConnection.state.requestHeaders),
        }
    } else {
      request = {
        method: method,
        headers: JSON.parse(cogsConnection.state.requestHeaders),
        body: cogsConnection.state.requestBody
      }
    }

    const response = await fetch(value, request)

    let responseText = ""
    if (response.ok) responseText = await response.text();
    cogsConnection.setState({responseCode: response.status});
    cogsConnection.setState({response: responseText });
  } catch (e) {
    console.error(e);    
    cogsConnection.setState({responseCode: 500});
    cogsConnection.setState({response: String(e) });
  }
  //We return the value (the url passed from cogs) here, so that can catch the response in a cogs behaviour and handle it dependet on what data was requested
  cogsConnection.sendEvent("response", value)
});
