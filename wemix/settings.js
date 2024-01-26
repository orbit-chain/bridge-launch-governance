module.exports = {
    chainList: [
        "avax",
        "bsc",
        "celo",
        "eth",
        "fantom",
        "heco",
        "klaytn",
        "matic",
        "metadium",
        "moonriver",
        "oec",
        "orbit",
        "xdai",
        "ton",
        "wemix"
    ],
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        AvaxBridgeContract: "0xc1BB90870d8b24E77DA35DFCD5122673dAFFfB45",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        CeloBridgeContract: "0x9fae958393B59ccb5e707B274615e214c8BD0AE1",
        EthBridgeContract: "0x78d80c33f23a3395c52b3a8c0d0b12253771b9f7",
        FantomBridgeContract: "0x349b3f3A4aA3F6D97bdbcCc01c77a798d2944dBF",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        MaticBridgeContract: "0x1Fc5A2cE72c71563E6EFC1fc35F326D4CCd23B93",
        MetadiumBridgeContract: "0xe6739AfDb6Bc1Abf8e1Bb3Ca25Ad320715f49904",
        MoonriverBridgeContract: "0x554Df2f7983de38b02533F154160C120A67335A4",
        OecBridgeContract: "0x186541Bf5c8dF14f7C98d3A82C4620852Ac620E3",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        XdaiBridgeContract: "0x4DBaE1d542e1747607583016A06bC9fD8B9b9a73",
        TonBridgeLayer2Contract: "0x25605C6247fDBC95D91275025ed3dc2632936c3a",
        WemixBridgeContract: "0xe9b55cBE750d0DED03f599456ea68931a2b5b09A",
        MessageMultiSigWallet: {
            hub: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Avax: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Heco: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Klaytn: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Matic: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Bsc: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Celo: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Eth: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Fantom: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Oec: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Moonriver: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Orbit: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Xdai: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Wemix: "0x8440812320A5B80878957E91a2937D3cB151c9e7",
            Ton: "0x0B1B2eA5035E7A7669E21c6be755Be32eB178f80",
            Metadium: "0x8440812320A5B80878957E91a2937D3cB151c9e7"
        },
        Avax: {
            AvaxMinterContract: "0x81aB59F77cdb158d4A9DcF66d5e04E6e277a0a43",
            MessageMultiSigWallet: "0x56D9c7A23CBaf1442fBDaAA3B97502f089cfecbF",
            AvaxAdminContract: "0x86c462C9F64347FC1b1aA43eE5dcBCEFc0Ca5514"
        },
        Bsc: {
            BscMinterContract: "0xeA74a390Df39080c417DA23023cAa84f6Bb28568",
            MessageMultiSigWallet: "0x41A307A2EEC05d7E8BbA452c1D061398bE29e4f6",
            BscAdminContract: "0x81aB59F77cdb158d4A9DcF66d5e04E6e277a0a43"
        },
        Celo: {
            CeloMinterContract: "0x86c462C9F64347FC1b1aA43eE5dcBCEFc0Ca5514",
            MessageMultiSigWallet: "0x3be51C9F0584Cc24eA330665010d69a21edee240",
            CeloAdminContract: "0x126D9c1d30028a976Fd29354A58f990DCde4cB9a"
        },
        Eth: {
            EthMinterContract: "0x34c51c0cD541CAddcb71dB298Ec9fAf6D0256808",
            MessageMultiSigWallet: "0x381A07875D7C346E024cF4a9C46616154dFd1ea5",
            EthAdminContract: "0x8e2cFeb906b293b329d3017eB55faff0EA0C6FF4"
        },
        Fantom: {
            FantomMinterContract: "0x96397029CeCe685C325A41863EB7C33d07d7cc0C",
            MessageMultiSigWallet: "0x81aB59F77cdb158d4A9DcF66d5e04E6e277a0a43",
            FantomAdminContract: "0xDD693eBB514355ff6153b2dD8036d9a333d99a38"
        },
        Heco: {
            HecoMinterContract: "0x56D9c7A23CBaf1442fBDaAA3B97502f089cfecbF",
            MessageMultiSigWallet: "0xb5f76BDd8383A079a31381DcD5205Bf221B6476e",
            HecoAdminContract: "0x3be51C9F0584Cc24eA330665010d69a21edee240"
        },
        Klay: {
            KlaytnMinterContract: "0x3be51C9F0584Cc24eA330665010d69a21edee240",
            MessageMultiSigWallet: "0x4A6A0c1b6452a3a4adB5F095A65BE59Eb1edd3dD"
        },
        Matic: {
            MaticMinterContract: "0xb5f76BDd8383A079a31381DcD5205Bf221B6476e",
            MessageMultiSigWallet: "0x3f5beBAf2A10326e5aB91777a0E23E2b68E4A17c",
            MaticAdminContract: "0x4A6A0c1b6452a3a4adB5F095A65BE59Eb1edd3dD"
        },
        Metadium: {
            MetadiumMinterContract: "0xeA74a390Df39080c417DA23023cAa84f6Bb28568",
            MessageMultiSigWallet: "0x41A307A2EEC05d7E8BbA452c1D061398bE29e4f6",
            MetadiumAdminContract: "0x81aB59F77cdb158d4A9DcF66d5e04E6e277a0a43"
        },
        Moonriver: {
            MoonriverMinterContract: "0x86c462C9F64347FC1b1aA43eE5dcBCEFc0Ca5514",
            MessageMultiSigWallet: "0x3be51C9F0584Cc24eA330665010d69a21edee240",
            MoonriverAdminContract: "0x126D9c1d30028a976Fd29354A58f990DCde4cB9a"
        },
        Oec: {
            OecMinterContract: "0x86c462C9F64347FC1b1aA43eE5dcBCEFc0Ca5514",
            MessageMultiSigWallet: "0x3be51C9F0584Cc24eA330665010d69a21edee240",
            OecAdminContract: "0x126D9c1d30028a976Fd29354A58f990DCde4cB9a"
        },
        Orbit: {
            OrbitMinterContract: "0x60D85ED151CBdE337019263A54AD2fb6b495547C",
            MessageMultiSigWallet: "0x8440812320A5B80878957E91a2937D3cB151c9e7"
        },
        Ton: {
            TonMinterContract: "EQA4XgASzx1VSi6T0r8tv1XdHwfUEplQhjg1q09RUd8gcPhd",
            MessageMultiSigWallet: "EQAj33y_sRp4Ypuz8zdSGfrhYdTgW1uLhjVHuUNBNxnOA1RW",
        },
        Xdai: {
            XdaiMinterContract: "0x86c462C9F64347FC1b1aA43eE5dcBCEFc0Ca5514",
            MessageMultiSigWallet: "0x3be51C9F0584Cc24eA330665010d69a21edee240",
            XdaiAdminContract: "0x126D9c1d30028a976Fd29354A58f990DCde4cB9a"
        },
        Wemix: {
            WemixVaultContract: "0x445F863df0090f423A6D7005581e30d5841e4D6d",
            MessageMultiSigWallet: "0x775b772Bd879931433C95047aF46113E97083614",
            WemixAdminContract: "0x9CE4E2B920DdEe58158704A47650a13123907749"
        },
        Governance: {
            Chain: "WEMIX",
            Address: "0x445F863df0090f423A6D7005581e30d5841e4D6d",
            Bytes: "0x445F863df0090f423A6D7005581e30d5841e4D6d",
            Id: "0x186eb827d7996bd507fef5bd466a5348258c6a0b0dcaeed907df7699579f363c"
        }
    },
    // Node Endpoints
    Endpoints: {
        Orbit: {
            rpc: "https://bridge-en.orbitchain.io:7443",
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
            rpc: ["https://bscrpc.com", "https://rpc.ankr.com/bsc", "https://bsc.chain-node.orbitchain.io:7643"],
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
            rpc: ["https://heco.chain-node.orbitchain.io:7643", "https://http-mainnet.hecochain.com"],
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
            rpc: ["https://polygon-rpc.com", "https://matic.chain-node.orbitchain.io:7643", "https://rpc.ankr.com/polygon"],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Metadium: {
            rpc: ["https://api.metadium.com/prod"],
            socket: "ws://prd-meta-mainnet-ws.node.ozys.work:8545 ",
        },
        Moonriver: {
            rpc: ["https://moonriver.public.blastapi.io", "https://rpc.api.moonriver.moonbeam.network"],
            socket: "wss://wss.api.moonriver.moonbeam.network",
        },
        Oec: {
            rpc: ["https://exchainrpc.okex.org", "https://oec.chain-node.orbitchain.io:7643"],
            socket: "wss://exchainws.okex.org:8443",
        },
        Wemix: {
            rpc: ["https://api.wemix.com"],
            socket: "wss://ws.wemix.com",
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
    METADIUM_CHAIN_ID: 11,
    OEC_CHAIN_ID: 66,
    WEMIX_CHAIN_ID: 1111,

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: "debug",

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
