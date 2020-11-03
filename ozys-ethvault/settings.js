module.exports = {
    // operating chain list
    chainList: [
        'eth',
        'klaytn',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        OrbitBridgeHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        EthBridgeContract: "0x78d80c33f23a3395c52b3a8c0d0b12253771b9f7",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        MessageMultiSigWallet: {
            Hub: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Eth: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
            Klaytn: "0xfffec9385a40a12f8526fefc0036b6fc44b68092",
        },
        Eth: {
            EthVaultContract: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
        },
        Klay: {
            KlaytnMinterContract: "0x60070F5D2e1C1001400A04F152E7ABD43410F7B9",
            MessageMultiSigWallet: "0x7eAF19361f709A1e4456da6A6DAA044821Af8B37",
        },
        Governance: {
            Chain: "ETH",
            Address: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
            Bytes: "0x1bf68a9d1eaee7826b3593c20a0ca93293cb489a",
            Id: "0x50f408f4b0fb17bf4f5143de4bd95802410d00422f008e9deef06fb101a0f060",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Eth : {
            rpc : "https://mainnet.infura.io/v3/[PROJECT_ID]",
            socket : "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
        },
        Klaytn: {
            rpc: "https://api.cypress.klaytn.net:8651",
            socket: "wss://api.cypress.klaytn.net:8652",
        },
        Parser: {
            api: "http://localhost:8084",
        },
        Syncer: {
            api: "http://localhost:9797/v1", 
        },
    },

    DEBUG: true,
    LOGLEVEL: 'debug',

    // WIP: validator things.
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },
    
    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain:7743/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
