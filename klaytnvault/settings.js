module.exports = {
    chainList: [
        'avax',
        'bsc',
        'celo',
        'heco',
        'fantom',
        'harmony',
        'klaytn',
        'matic',
        'moonriver',
        'orbit',
        'oec',
        'xdai',
        'eth',
        'stacks',
        'ton'
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
            Stacks: "0x225a23428FEb303F3821C90ceA8e35C612260a42",
            Ton: "0x43aE0689156d644f4b1De4a75a4586867A9d3CF0",
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
        Stacks: {
			DeployAddress: "SP2JWSZAKDEVADF2FADKS0DF8S01CY5WP61YXAV71",
			MessageMultiSigWallet: "gov-matic",
			"0x0000000000000000000000000000000000000000": "orbit-klay",
			"0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654": "orbit-ksp",
        },
        Ton: {
            TonMinterContract: "EQAlMRLTYOoG6kM0d3dLHqgK30ol3qIYwMNtEelktzXP_pD5",
            MessageMultiSigWallet: "EQAblz6Xr6b-7eLAWeagIK2Dn-g81YiNpu0okHfc9EwY9_72",
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
            rpc: ["https://api.avax.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche", "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc"],
            socket: "https://api.avax.network/ext/bc/C/ws",
        },
        Bsc: {
            rpc : ["https://bscrpc.com", "https://rpc.ankr.com/bsc", "https://bsc.chain-node.orbitchain.io:7643"],
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: ["https://forno.celo.org", "https://rpc.ankr.com/celo", "https://celo.chain-node.orbitchain.io:7643"],
            socket: "wss://forno.celo.org/ws",
        },
        Eth: {
            rpc: ["https://eth.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/eth", "https://mainnet.infura.io/v3/[PROJECT_ID]"],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
            beacon: "https://beacon.chain-node.orbitchain.io:7643",
        },
        Fantom: {
            rpc: ["https://rpc.ftm.tools", "https://rpc.fantom.network", "https://rpc.ankr.com/fantom"],
            socket: "wss://wsapi.fantom.network",
        },
        Harmony: {
            rpc: ["https://api.harmony.one", "https://rpc.ankr.com/harmony", "https://harmony-mainnet.chainstacklabs.com"],
            socket: "wss://ws.s0.t.hmny.io",
        },
        Heco: {
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet.hecochain.com"],
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
            },
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fautor.app", "https://klaytn02.fautor.app", "https://public-node-api.klaytnapi.com/v1/cypress"],
            socket: "wss://public-node-api.klaytnapi.com/v1/cypress/ws"
        },
        Matic: {
            rpc : ["https://polygon-rpc.com", "https://matic.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/polygon"],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: ["https://moonriver.public.blastapi.io", "https://rpc.api.moonriver.moonbeam.network"],
            socket: "wss://wss.api.moonriver.moonbeam.network",
        },
        Oec: {
            rpc: ["https://exchainrpc.okex.org", "https://oec.chain-node.orbitchain.io:7643"],
            socket: "wss://exchainws.okex.org:8443",
        },
        Stacks: {
            url: "https://stacks-node-api.mainnet.stacks.co",
            network: "mainnet",
        },
        Ton: {
            rpc: "https://toncenter.com/api/v2/jsonRPC",
            apiKey: "REPLACE THIS STIRING TO ISSUED API TOKEN",
        },
        Xdai: {
            rpc: ["https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosis-mainnet.public.blastapi.io"],
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    ETH_CHAIN_ID: '0x1',
    AVAX_CHAIN_ID: '0xa86a',
    CELO_CHAIN_ID: '0xa4ec',
    FANTOM_CHAIN_ID: '0xfa',
    HARMONY_CHAIN_ID: 1666600000,
    HARMONY_GAS_PRICE: 50 * 10 ** 9,
    HECO_CHAIN_ID: '0x80',
    MATIC_CHAIN_ID: '0x89',
    OEC_CHAIN_ID: 66,

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://va.bridge.orbitchain.io.prod.ozys.work/v1/validator/report",
            Interval: 60 * 1000,
        },
    },
}
