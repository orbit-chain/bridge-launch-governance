module.exports = {
    // operating chain list
    chainList: [
        'klaytn-v2',
        'xrp',
    	'orbit',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        XrpBridgeContract: "0x4e6c37162021fda832fb95aff42af92c2e8b6257",
        XrpAddressBook: "0x215ce2b450bbbab82825df13885851f8ee6234e0",
        MessageMultiSigWallet: {
            Hub: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Klaytn: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Orbit: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Xrp: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
        },
        Klay: {
            KlaytnMinterContract: "0x917655B6C27A3D831b4193CE18ECe6bfcC806BF8",
            MessageMultiSigWallet: "0x22Bef83bABcC1169855D748D13523CA10aD87dF7",
        },
        Orbit: {
            OrbitMinterContract: "0xe288716122c53e8df43884cb06b85cffdaa57546",
            MessageMultiSigWallet: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
        },
        Governance: {
            Chain: "XRP",
            Address: "rLcxBUrZESqHnruY4fX7GQthRjDCDSAWia",
            Bytes: "0x00d73701c4123236e2d61d372052eadcc3ede48b06e617b033",
            Id: "0xfd13fd208d2a902efdd49dab8b23889bd6fac1141b9b88666c3e4e9c6612b5f1",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Klaytn: {
            // Using KAS
            isKas: true,
            Kas: {
                    // KAS Default
                    rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                    chainId: 8217,

                    // Your Credential
                    accessKeyId: "",
                    secretAccessKey: "",
            },

            // Using YOUR OWN NODE
            isKas: false,
            rpc: "https://cypress-klaytn-node",
            socket: "wss://cypress-klaytn-node",
        },
        Xrp: {
            rpc: "https://s1.ripple.com:51234",
            socket: "wss://s1.ripple.com:443",
        }
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
	    Endpoint: "https://bridge-en.orbitchain.io:7743/xrpvault/v1/validator/report",
	    Interval: 60 * 1000,
	},
    },
}
