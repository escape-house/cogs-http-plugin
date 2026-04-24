import { CogsConnection } from "@clockworkdog/cogs-client";

import * as manifest from "./cogs-plugin-manifest.js";

const cogsConnection = new CogsConnection(manifest);


cogsConnection.addEventListener("event", async ({ name, value }) => {
  switch (name) {
    case "GetRequest":
      try {
        const response = await fetch(value);
        console.log(response);
        
        if (response.ok) {
          const text = await response.text();
          cogsConnection.setState({response: text});
        }else{
          cogsConnection.setState({response: ""});
        }
        cogsConnection.setState({responseCode: response.status});
      } catch (e) {
        cogsConnection.setState({responseCode: 500});
        cogsConnection.setState({response: "" });
      }
      //We return the value (the url passed from cogs) here, so that can catch the response in a cogs behaviour. And acc
      console.log("value:", value);
      
      cogsConnection.sendEvent("response", value)
  }
});
