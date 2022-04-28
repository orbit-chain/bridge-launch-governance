module.exports = {
    // operating chain list
    chainList: [
        'klaytn-v2',
        'orbit',
        'bsc',
        'heco',
        'matic',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        MaticBridgeContract: "0x1Fc5A2cE72c71563E6EFC1fc35F326D4CCd23B93",
        MessageMultiSigWallet: {
            Hub: "0x5059725ed52970725d882B7c66f613577BacaEB2",
            Klaytn: "0x5059725ed52970725d882B7c66f613577BacaEB2",
            Orbit: "0x5059725ed52970725d882B7c66f613577BacaEB2",
            Bsc: "0x5059725ed52970725d882B7c66f613577BacaEB2",
            Heco: "0x5059725ed52970725d882B7c66f613577BacaEB2",
            Matic: "0x5059725ed52970725d882B7c66f613577BacaEB2",
        },
        Bsc: {
            VaultContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
            MessageMultiSigWallet: "0xf2C5a817cc8FFaAB4122f2cE27AB8486DFeAb09F",
            BscAdminContract: "0x8D5DcEab358979101dC96A62e08296269F6BD1bd",
        },
        Klay: {
            KlaytnMinterContract: "0xB0a83941058b109Bd0543fa26d22eFb8a2D0f431",
            MessageMultiSigWallet: "0x937936FF183102Dfb1609D5dbFbC50201f92c744",
        },
        Orbit: {
            OrbitMinterContract: "0xd4EC00c84f01361F36D907E061EA652eE50572AF",
            MessageMultiSigWallet: "0x5059725ed52970725d882B7c66f613577BacaEB2",
        },
        Heco: {
            HecoMinterContract: "0xf2C5a817cc8FFaAB4122f2cE27AB8486DFeAb09F",
            MessageMultiSigWallet: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
            HecoAdminContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        },
        Matic: {
            MaticMinterContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
            MessageMultiSigWallet: "0xf2C5a817cc8FFaAB4122f2cE27AB8486DFeAb09F",
            MaticAdminContract: "0x8D5DcEab358979101dC96A62e08296269F6BD1bd",
        },
        Governance: {
            Chain: "BSC",
            Address: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
            Bytes: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
            Id: "0xa83e44c751c7b6296864c8145d325c9a9397f30adfc5a92c840fb7cb688775b3",
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
            }
        },
        Heco: {
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet-node.huobichain.com"],
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Bsc: {
            rpc : "https://bsc-dataseed.binance.org",
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Matic: {
            rpc : "https://polygon-rpc.com",
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
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

    // WIP: validator things.
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/bscvault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
