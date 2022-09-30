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
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Orbit: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Avax: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Bsc: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Celo: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Fantom: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Harmony: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Heco: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Klaytn: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Matic: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Moonriver: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Oec: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            Xdai: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Avax: {
            AvaxMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            AvaxAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Bsc: {
            BscMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            BscAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Celo: {
            CeloMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            CeloAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Fantom: {
            FantomMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            FantomAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Harmony: {
            HarmonyMinterContract: "0x7112999b437404B430acf80667E94D8E62b9e44E",
            MessageMultiSigWallet: "0x11F91b08469f77cf47d2d829B4230E9268e9E670",
            HarmonyAdminContract: "0x6CADF5FCD6D2930F6885725b5CCd060eaD9c1963",
        },
        Heco: {
            HecoVaultContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            HecoAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Klay: {
            KlaytnMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Matic: {
            MaticMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            MaticAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Moonriver: {
            MoonriverMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            MoonriverAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Oec: {
            OecMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            OecAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Xdai: {
            XdaiMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
            XdaiAdminContract: "0x2bA5049df54aEde8d26786DFBE0cf0fDF7eDBBAd",
        },
        Orbit: {
            OrbitMinterContract: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            MessageMultiSigWallet: "0x8B8B037CC309bf46E23226BF38BE433ABC284Cf6",
        },
        Governance: {
            Chain: "HECO",
            Address: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            Bytes: "0x38C92A7C2B358e2F2b91723e5c4Fc7aa8b4d279F",
            Id: "0x1958c3d245eed5312fa97ca358876d36b45c0905dd322b73efd66c8f836fb67f",
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
            rpc : ["https://bsc-dataseed.binance.org", "https://bsc-dataseed1.binance.org", "https://rpc.ankr.com/bsc", "https://bsc.chain-node.orbitchain.io:7643"],
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Celo: {
            rpc: ["https://forno.celo.org", "https://rpc.ankr.com/celo", "https://celo.chain-node.orbitchain.io:7643"],
            socket: "wss://forno.celo.org/ws",
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
            rpc : ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet-node.huobichain.com"],
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
            rpc: ["https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://klaytn01.fandom.finance", "https://klaytn02.fandom.finance", "https://public-node-api.klaytnapi.com/v1/cypress"],
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
            rpc: ["https://exchainrpc.okex.org", "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"],
            socket: "wss://exchainws.okex.org:8443",
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
