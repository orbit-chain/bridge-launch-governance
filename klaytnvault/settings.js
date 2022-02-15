module.exports = {
    chainList: [
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'klaytn-v2',
        'matic',
        'moonriver',
        'orbit',
        'oec',
        'xdai',
        'eth-v2',
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Orbit: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Avax: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Bsc: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Celo: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Fantom: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Harmony: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Heco: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Klaytn: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Matic: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Moonriver: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Oec: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            Xdai: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
        },
        Avax: {
            AvaxMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            AvaxAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Bsc: {
            BscMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            BscAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Celo: {
            CeloMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            CeloAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Eth: {
            EthMinterContract: "0x012c6d79b189e1aBD1EFaC759b275c5D49Abd164",
            MessageMultiSigWallet: "0x9Abc3F6c11dBd83234D6E6b2c373Dfc1893F648D",
            EthAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Fantom: {
            FantomMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            FantomAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Harmony: {
            HarmonyMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            HarmonyAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Heco: {
            HecoMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            HecoAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Klay: {
            KlaytnVaultContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
        },
        Matic: {
            MaticMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            MaticAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Moonriver: {
            MoonriverMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            MoonriverAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Oec: {
            OecMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            OecAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Xdai: {
            XdaiMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
            XdaiAdminContract: "0x3060E2fbDB75663b50bf9e629693DC39A4418736",
        },
        Orbit: {
            OrbitMinterContract: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            MessageMultiSigWallet: "0xcAA1B50341ad8Eb69A7bb1985bf39224044B1d48",
        },
        Governance: {
            Chain: "KLAYTN",
            Address: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            Bytes: "0x9abc3f6c11dbd83234d6e6b2c373dfc1893f648d",
            Id: "0xf8e356a0087a537f3e1a481c46ed4bdc4438723ebe666d8a3e7e6f4021d740a4",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
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
        Eth: {
            rpc: ["https://eth.chain-node.orbitchain.io:7643", "https://mainnet.infura.io/v3/[PROJECT_ID]"],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
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
            rpc : "https://http-mainnet-node.huobichain.com",
            socket: "wss://ws-mainnet.hecochain.com",
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
        Matic: {
            rpc : "https://polygon-rpc.com",
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

    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: 42220,
    FANTOM_CHAIN_ID: 250,
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
            Endpoint: "https://bridge-en.orbitchain.io:7743/klaytnvault/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
