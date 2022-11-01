module.exports = {
    chainList: [
        "avax",
        "bsc",
        "celo",
        "heco",
        "fantom",
        "klaytn",
        "matic",
        "moonriver",
        "orbit",
        "oec",
        "xdai",
        "eth",
        "ton_layer_1",
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        TonBridgeContract: "0xB773f5A2C0537964efC07B2ED13C89cE8FE7CCbA",
        TonAddressBook: "0x005be6cAF238609E23949EF75fC1a0a13Ea02928",
        MessageMultiSigWallet: {
            Hub: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Ton: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Orbit: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Avax: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Bsc: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Celo: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Fantom: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Heco: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Klaytn: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Matic: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Moonriver: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Oec: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            Xdai: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
        },
        Ton: {
            TonVaultContract: "EQCKFA1RuGJnaAqUPFXHgKxLOnhcL_amICDRWMOfZRI3T4_h",
            MessageMultiSigWallet: "EQA6HwnE1jxxczPKe3aRIyTvyNqtxaFWjKect90jS-01qEjw",
        },
        Avax: {
            AvaxMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            AvaxAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Bsc: {
            BscMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            BscAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Celo: {
            CeloMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            CeloAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Eth: {
            EthMinterContract: "0x5Cc6a1Dc39E523eFd6C42534a478942Cadd24f8C",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            EthAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Fantom: {
            FantomMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            FantomAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Heco: {
            HecoMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            HecoAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Klay: {
            KlaytnMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
        },
        Matic: {
            MaticMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            MaticAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Moonriver: {
            MoonriverMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            MoonriverAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Oec: {
            OecMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            OecAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Xdai: {
            XdaiMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
            XdaiAdminContract: "0x8966c07b38dcb277f1e5264368Cafb289DBCab4f",
        },
        Orbit: {
            OrbitMinterContract: "0x58A42330c0984babD5DEc2C943eAA345B7f41e44",
            MessageMultiSigWallet: "0x4dd5c30ae4a140d3B9180c778bD2e74c8e64E38A",
        },
        Governance: {
            Chain: "TON_LAYER_1",
            Address: "EQCKFA1RuGJnaAqUPFXHgKxLOnhcL_amICDRWMOfZRI3T4_h",
            Bytes: "0x8a140d51b86267680a943c55c780ac4b3a785c2ff6a62020d158c39f6512374f",
            Id: "0xc25b710f269dfffd6f045756d330b084451c6a0db366309b7f400859a1b76db4",
        },
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Ton: {
            rpc: "https://toncenter.com/api/v2/jsonRPC",
            apiKey: "REPLACE THIS STIRING TO ISSUED API TOKEN",
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
        Eth: {
            rpc: ["https://eth.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/eth", "https://mainnet.infura.io/v3/[PROJECT_ID]"],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
            beacon: "https://beacon.chain-node.orbitchain.io:7643",
        },
        Fantom: {
            rpc: ["https://rpc.ftm.tools", "https://rpc.fantom.network", "https://rpc.ankr.com/fantom"],
            socket: "wss://wsapi.fantom.network",
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
            rpc: ["https://exchainrpc.okex.org", "https://oec.chain-node.orbitchain.io:7643"],
            socket: "wss://exchainws.okex.org:8443",
        },
        Xdai: {
            rpc: ["https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosis-mainnet.public.blastapi.io"],
            socket: "ws://xdai.poanetwork.dev:8546",
        },
    },

    ETH_CHAIN_ID: "0x1",
    AVAX_CHAIN_ID: "0xa86a",
    CELO_CHAIN_ID: "0xa4ec",
    FANTOM_CHAIN_ID: "0xfa",
    HARMONY_CHAIN_ID: 1666600000,
    HARMONY_GAS_PRICE: 50 * 10 ** 9,
    HECO_CHAIN_ID: "0x80",
    MATIC_CHAIN_ID: "0x89",
    OEC_CHAIN_ID: 66,

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: "debug",

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
