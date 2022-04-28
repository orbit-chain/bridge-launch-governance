module.exports = {
    // operating chain list
    chainList: [
        "icon-v2",
        "klaytn-v2",
        "orbit",
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        IconBridgeContract: "0x6819374cb320d1184a681e2b53ad858d16b9c8fa",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0xa535306Ee1e5438B943b034f5956dc56AA54EF84",
            Klaytn: "0xa535306Ee1e5438B943b034f5956dc56AA54EF84",
            Icon: "0xa535306Ee1e5438B943b034f5956dc56AA54EF84",
            Orbit: "0xa535306Ee1e5438B943b034f5956dc56AA54EF84"
        },
        Klay: {
            KlaytnMinterContract: "0xcD953813896F766f1Eb9B613610E1752eD6F8395",
            MessageMultiSigWallet: "0xF6E3F95a1AC1C9A86Fa5C3c61DbD3D3BC6B566B5",
        },
        Icon: {
            IconVaultContract: "cxa82aa03dae9ca03e3537a8a1e2f045bcae86fd3f",
            MessageMultiSigWallet: "cxd41e399c809a3671191c916d619e4d0fef04feea",
        },
        Orbit: {
            OrbitMinterContract: "0xcD953813896F766f1Eb9B613610E1752eD6F8395",
            MessageMultiSigWallet: "0xa535306Ee1e5438B943b034f5956dc56AA54EF84",
        },
        Governance: {
            Chain: "ICON",
            Address: "cxa82aa03dae9ca03e3537a8a1e2f045bcae86fd3f",
            Bytes: "0x01a82aa03dae9ca03e3537a8a1e2f045bcae86fd3f",
            Id: "0x6432be95e9ad50213ac792ac86951833cb24e47523feb923a677c711b05539e7",
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
        Icon: {
            api: "https://icon.chain-node.orbitchain.io:7643/api/v3",
            rpc: "https://icon.chain-node.orbitchain.io:7643/api/v3",
            debug: "https://icon.chain-node.orbitchain.io:7643/api/debug/v3",
            version: 3,
            nid: 1,
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

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/iconvault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
