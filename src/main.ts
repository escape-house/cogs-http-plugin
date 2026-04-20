import { CogsConnection } from '@clockworkdog/cogs-client';

import * as manifest from './cogs-plugin-manifest.js';

const cogsConnection = new CogsConnection(manifest);

cogsConnection.addEventListener('event', ({ name, value }) => {
    console.log("Name:", name)
    console.log("Value:", value);
    
    handleGet(value)
    cogsConnection.sendEvent("get-respone", "asd");

});

function handleGet(url: string): string
{
    console.log(url);
    return ""
}
