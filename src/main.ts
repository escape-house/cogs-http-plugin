import { CogsConnection } from '@clockworkdog/cogs-client';

import * as manifest from './cogs-plugin-manifest.js';

const cogsConnection = new CogsConnection(manifest);

cogsConnection.addEventListener('event', ({ name, value }) => {
    console.log("Name:", name)
    console.log("Value:", value);
    if (name === "GET") {
        cogsConnection.sendEvent("get-response", "my Test Response");
    }
});