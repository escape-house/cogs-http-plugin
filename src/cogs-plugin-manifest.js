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
                {
                    name: 'PostRequest',
                    value: { type: "string" }
                },
                {
                    name: 'PutRequest',
                    value: { type: "string" }
                },
                {
                    name: 'DeleteRequest',
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
            },
            {
                name: 'requestBody',
                value: {
                    type: 'string',
                    default: '{}'
                },
                writableFromCogs: true
            },
            {
                name: 'requestHeaders',
                value: {
                    type: 'string',
                    default: '{}'
                },
                writableFromCogs: true
            },

        ]
    });