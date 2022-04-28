module.exports = {
    // operating chain list
    chainList: [
        'klaytn-v2',
        'xrp',
    	'orbit',
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'matic',
        'moonriver',
        'oec',
        'xdai',
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
            Avax: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Bsc: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Celo: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Fantom: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Harmony: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Heco: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Matic: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Moonriver: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Oec: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
            Xdai: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
        },
        Klay: {
            KlaytnMinterContract: "0x917655B6C27A3D831b4193CE18ECe6bfcC806BF8",
            MessageMultiSigWallet: "0x22Bef83bABcC1169855D748D13523CA10aD87dF7",
        },
        Orbit: {
            OrbitMinterContract: "0xe288716122c53e8df43884cb06b85cffdaa57546",
            MessageMultiSigWallet: "0x1e9f03b3bdcb33bfec6ef504356bcbc72392e3c5",
        },
        Avax: {
            AvaxMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            AvaxAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Bsc: {
            BscMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            BscAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Celo: {
            CeloMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            CeloAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Fantom: {
            FantomMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            FantomAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Harmony: {
            HarmonyMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            HarmonyAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Heco: {
            HecoMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            HecoAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Matic: {
            MaticMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            MaticAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Moonriver: {
            MoonriverMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            MoonriverAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Oec: {
            OecMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            OecAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
        },
        Xdai: {
            XdaiMinterContract: "0xE38ca00A6FD34B793012Bb9c1471Adc4E98386cF",
            MessageMultiSigWallet: "0xfa50391705D2FA7ac47Dd211B78378825bc763e6",
            XdaiAdminContract: "0x009071058740276327A393B084eC447b8F0Fc6Ae",
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
            // isKas: false,
            // rpc: "https://cypress-klaytn-node",
            // socket: "wss://cypress-klaytn-node",
        },
        Xrp: {
            rpc: "https://s1.ripple.com:51234",
            socket: "wss://s1.ripple.com:443",
        },
        Avax: {
            rpc: "https://api.avax.network/ext/bc/C/rpc",
            socket: "https://api.avax.network/ext/bc/C/ws",
        },
        Bsc: {
            rpc : "https://bsc-dataseed.binance.org",
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: "https://forno.celo.org",
            socket: "wss://forno.celo.org/ws",
        },
        Fantom: {
            rpc: "https://rpc.ftm.tools",
            socket: "wss://wsapi.fantom.network",
        },
        Harmony: {
            rpc: "https://api.harmony.one",
            socket: "wss://ws.s0.t.hmny.io",
        },
        Heco: {
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet-node.huobichain.com"],
            socket: "wss://ws-mainnet.hecochain.com",
        },
        Matic: {
            rpc: "https://polygon-rpc.com",
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: "https://moonriver.api.onfinality.io/public",
            socket: "wss://moonriver.api.onfinality.io/public-ws",
        },
        Oec: {
            rpc: "https://exchainrpc.okex.org",
            socket: "wss://exchainws.okex.org:8443",
        },
        Xdai: {
            rpc: "https://rpc.xdaichain.com",
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    DEBUG: true,
    LOGLEVEL: 'debug',

    ETH_CHAIN_ID: '0x1',
    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: '0xa4ec',
    FANTOM_CHAIN_ID: '0xfa',
    HARMONY_CHAIN_ID: 1666600000,
    HECO_CHAIN_ID: '0x80',
    MATIC_CHAIN_ID: '0x89',
    OEC_CHAIN_ID: 66,

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
