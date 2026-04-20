module.exports =
    /**
     * @type {const}
     * @satisfies {import("@clockworkdog/cogs-client").CogsPluginManifest}
     */
    ({
        name: 'HTTP Client',
        icon: 'bullseye-pointer',
        description: 'http client with responses',
        version: '1',
        events: {
            toCogs: [
                {
                    name: 'get-respone',
                    value: {type: 'string'},
                },
            ],
            fromCogs: [
                {
                    name: 'GET',
                    value: {type: "string"}
                },
            ],
        },
    });