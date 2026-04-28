# Cogs HTTP Client with return values

This is an HTTP Client plugin for [COGS](https://cogs.show/) with configurable request Body, Request headers and Responses.

A Demonstration of how the plugin can be implemented in COGS is also in the `cogs-test` directory.

## Install
TODO

## How to use

### Response Events
The response event will trigger after a GET, POST, PUT or DELETE request has been finished. You can catch the response in COGS with the uri that was passed to the request.

### States
#### `response` and `responseCode`
The `response` state is a String and contains the response from the request. This state will change with each request. It is recommended to save the response to a local variable in COGS upon the response behavior trigger.

The `responseCode` is similar to the `response`, but it contains the status code of the request (e.g. 200, 500...). It will default to 500 if an error is thrown.

#### `requestHeaders` and `requestBody`
The `requestHeaders` and `requestBody` can be written from cogs and should contain a JSON String with the desired Headers and Body. `requestBody` will be ignored on GET requests. Don't use single quotes in the JSON String, this will lead to parsing errors.

## Building
To build the project run `yarn install` and `yarn build`

## Author
If you have any questions, need support or ideas to improve this plugin, reach out to me on the COGS Discord :)
