module.exports = {
    // operating chain list
    chainList: [
        'celo',
        'klaytn',
        'orbit',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        CeloBridgeContract: "0x9fae958393B59ccb5e707B274615e214c8BD0AE1",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
            Klaytn: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
            Celo: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
            Orbit: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7"
        },
        Klay: {
            KlaytnMinterContract: "0x979cD0826C2bf62703Ef62221a4feA1f23da3777",
            MessageMultiSigWallet: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
        },
        Celo: {
            CeloVaultContract: "0x979cD0826C2bf62703Ef62221a4feA1f23da3777",
            MessageMultiSigWallet: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
            CeloAdminContract: "0x6a1cf2e4b8DF2C2707e34cad35D8AF4535510F53",
        },
        Orbit: {
            OrbitMinterContract: "0x979cD0826C2bf62703Ef62221a4feA1f23da3777",
            MessageMultiSigWallet: "0xE665028E06Cab79928D8e607E0de99FfD7Eb76A7",
        },
        Governance: {
            Chain: "CELO",
            Address: "0x979cD0826C2bf62703Ef62221a4feA1f23da3777",
            Bytes: "0x979cD0826C2bf62703Ef62221a4feA1f23da3777",
            Id: "0x6c09d7b79b91a3d49c3648a1bbc811f1b99f16045218e72a597a7692580ccab1",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Klaytn: {
            isKas: true,
            Kas: {
                // KAS Default
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,

                // Your Credential
                accessKeyId: "",
                secretAccessKey: ""
            },
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fandom.finance", "https://klaytn02.fandom.finance", "https://public-node-api.klaytnapi.com/v1/cypress"],
            socket: "wss://public-node-api.klaytnapi.com/v1/cypress/ws"
        },
        Celo: {
            rpc: ["https://forno.celo.org", "https://rpc.ankr.com/celo"],
            socket: "wss://forno.celo.org/ws",
        },
    },

    ETH_CHAIN_ID: '0x1',
    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: '0xa4ec',
    FANTOM_CHAIN_ID: '0xfa',
    HARMONY_CHAIN_ID: 1666600000,
    HECO_CHAIN_ID: '0x80',
    MATIC_CHAIN_ID: '0x89',
    OEC_CHAIN_ID: 66,

    DEBUG: true,
    LOGLEVEL: 'debug',

    CELO_GAS_PRICE: 5 * 10 ** 9,

    //TODO: Replace PK
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/celovault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
