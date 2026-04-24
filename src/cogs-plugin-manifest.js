module.exports =
    /**
     * @type {const}
     * @satisfies {import("@clockworkdog/cogs-client").CogsPluginManifest}
     */
    ({
        name: 'HTTP Client',
        icon: 'bullseye-pointer',
        description: 'HTTP client with responses',
        version: '1',
        events: {
            toCogs: [
                {

                    name: 'response',
                    value: {
                        type: 'string'
                    }
                }
            ],
            fromCogs: [
                {
                    name: 'GetRequest',
                    value: { type: "string" }
                },
            ],
        },
        state: [
            {
                name: 'response',
                value: {
                    type: 'string',
                    default: ''
                },
                writableFromClient: true
            },
            {
                name: 'responseCode',
                value: {
                    type: 'number',
                    default: -1
                },
                writableFromClient: true
            }

        ]
    });