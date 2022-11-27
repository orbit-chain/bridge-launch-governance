module.exports = {
    chainList: [
        'bsc',
        'heco',
        'klaytn',
        'matic',
        'orbit',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        MaticBridgeContract: "0x1Fc5A2cE72c71563E6EFC1fc35F326D4CCd23B93",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Klaytn: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Bsc: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Heco: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Matic: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Orbit: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
        },
        Bsc: {
            BscMinterContract: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            MessageMultiSigWallet: "0x2a21eD436E508d8FCF41F99E7fDEB81e80c12d10",
            BscAdminContract: "0xB3a802a72FF9681E4b7809b8523c154d3434A631",
        },
        Heco: {
            HecoMinterContract: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            MessageMultiSigWallet: "0x2a21eD436E508d8FCF41F99E7fDEB81e80c12d10",
            HecoAdminContract: "0xB3a802a72FF9681E4b7809b8523c154d3434A631",
        },
        Matic: {
            MaticMinterContract: "0x2a21eD436E508d8FCF41F99E7fDEB81e80c12d10",
            MessageMultiSigWallet: "0xc1BB90870d8b24E77DA35DFCD5122673dAFFfB45",
            MaticAdminContract: "0xB3a802a72FF9681E4b7809b8523c154d3434A631",
        },
        Klay: {
            KlaytnMinterContract: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            MessageMultiSigWallet: "0x2a21eD436E508d8FCF41F99E7fDEB81e80c12d10",
        },
        Orbit: {
            OrbitVaultContract: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            MessageMultiSigWallet: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
        },
        Governance: {
            Chain: "ORBIT",
            Address: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Bytes: "0x9BB0bF13103DfD75877979c5224173562E4ff552",
            Id: "0x055ca0278d68aea84f4aa13a1ff9e6ab02495710b3b4ac36708dd48c0470e0e7",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Matic: {
            rpc : ["https://polygon-rpc.com", "https://polygon-mainnet-rpc.allthatnode.com:8545", "https://matic-mainnet.chainstacklabs.com", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://matic.chain-node.orbitchain.io:7643",],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Klaytn: {
            isKas: false,
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fautor.app", "https://klaytn02.fautor.app", "https://public-node-api.klaytnapi.com/v1/cypress"],
            socket: "wss://public-node-api.klaytnapi.com/v1/cypress/ws",
            Kas: {
                // KAS Default
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,

                // KAS need provide credentials after signup(https://www.klaytnapi.com)
                accessKeyId: "",
                secretAccessKey: ""
            }
        },
        Heco: {
            rpc : ["https://http-mainnet.hecochain.com", "https://heco.chain-node.orbitchain.io:7643",],
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Bsc: {
            rpc : ["https://bscrpc.com", "https://rpc.ankr.com/bsc", "https://bsc.chain-node.orbitchain.io:7643"],
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
    },

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
