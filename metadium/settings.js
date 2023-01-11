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
			hub: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Avax: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Heco: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Klaytn: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Matic: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Metadium: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Celo: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Bsc: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Eth: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Fantom: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Oec: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Moonriver: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Orbit: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Xdai: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Wemix: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef",
			Ton: "0xd40e948c76e6735b335a87677c3ab6595D1BFC06"
		},
		Avax: {
			AvaxMinterContract: "0xf4D9c96896d8dE644E229e37FdC9Cb02bee65e51",
			MessageMultiSigWallet: "0x218c6E663e43542d90E4Bf6247b1E9e719ce0FAF",
			AvaxAdminContract: "0xA41eC45f1828bD1b3e91Ca31Bf005AfeA540D6f2"
		},
		Bsc: {
			BscMinterContract: "0x3F0ADd7b24080352E4EC7DD8b9F6B8e7BbB36717",
			MessageMultiSigWallet: "0x005be6cAF238609E23949EF75fC1a0a13Ea02928",
			BscAdminContract: "0x0A1ce5a7867BA59Ce9807C0774acf8b376f52E4F"
		},
		Celo: {
			CeloMinterContract: "0xd614BD2B1f95ea3D1A32320747B8d37e757d196d",
			MessageMultiSigWallet: "0xa781EeCa90Ab6E5d6bAE94a15C95776E112F0AB5",
			CeloAdminContract: "0xd7586a62992dAe0227D341cC02414ABB93e0b555"
		},
		Eth: {
			EthMinterContract: "0x06d1484298773B74235cD400926a7b1e65fdea55",
			MessageMultiSigWallet: "0x77258E1e42D26817Cc840a5906C212B3B8CB636a",
			EthAdminContract: "0x77C24eB33FE159606397a5309d6C4D841e160600"
		},
		Fantom: {
			FantomMinterContract: "0xA41eC45f1828bD1b3e91Ca31Bf005AfeA540D6f2",
			MessageMultiSigWallet: "0x70cf20911fb49974532dc4EC8b56f96DA34511F4",
			FantomAdminContract: "0x9Cfb4a095dB83Bc51B23EE89A0eD2b082D99ea51"
		},
		Heco: {
			HecoMinterContract: "0x218c6E663e43542d90E4Bf6247b1E9e719ce0FAF",
			MessageMultiSigWallet: "0x12F421Ffac3B16c7FF73bC82f694550Fa4D711C6",
			HecoAdminContract: "0x70cf20911fb49974532dc4EC8b56f96DA34511F4"
		},
		Klay: {
			KlaytnMinterContract: "0x02e0E14F84F6A07CC82E8076D09c09070B087AFf",
			MessageMultiSigWallet: "0xA41eC45f1828bD1b3e91Ca31Bf005AfeA540D6f2"
		},
		Matic: {
			MaticMinterContract: "0xCBCe11BCFde0377b79A83a8c358743A46fb2EaF4",
			MessageMultiSigWallet: "0x1976b603d73eD45154473d04f44bd9f7f26ee512",
			MaticAdminContract: "0x12F421Ffac3B16c7FF73bC82f694550Fa4D711C6"
		},
		Metadium: {
			MetadiumVaultContract: "0x292A00F3b99e3CB9b324EdbaA92258C3C61b55ab",
			MessageMultiSigWallet: "0x218c6E663e43542d90E4Bf6247b1E9e719ce0FAF",
			MetadiumAdminContract: "0x70cf20911fb49974532dc4EC8b56f96DA34511F4"
		},
		Moonriver: {
			MoonriverMinterContract: "0xd614BD2B1f95ea3D1A32320747B8d37e757d196d",
			MessageMultiSigWallet: "0xa781EeCa90Ab6E5d6bAE94a15C95776E112F0AB5",
			MoonriverAdminContract: "0xd7586a62992dAe0227D341cC02414ABB93e0b555"
		},
		Oec: {
			OecMinterContract: "0xd614BD2B1f95ea3D1A32320747B8d37e757d196d",
			MessageMultiSigWallet: "0xa781EeCa90Ab6E5d6bAE94a15C95776E112F0AB5",
			OecAdminContract: "0xd7586a62992dAe0227D341cC02414ABB93e0b555"
		},
		Orbit: {
			OrbitMinterContract: "0x0B405F5853e4FA886E12638dD30963879846c411",
			MessageMultiSigWallet: "0x070BB923318bE659Db7bF72cfb500C6C554EC9ef"
		},
		Ton: {
            TonMinterContract: "EQDiluynnsKKIS6HTOQxKM9FSUMUY1AofTfRhYyx4e1T8bSg",
            MessageMultiSigWallet: "EQAbS7Y3vCI5bWPcaAkNxIDnYNyBdjByfzMBUHiUBP7l124S",
        },
		Xdai: {
			XdaiMinterContract: "0xd614BD2B1f95ea3D1A32320747B8d37e757d196d",
			MessageMultiSigWallet: "0xA41eC45f1828bD1b3e91Ca31Bf005AfeA540D6f2",
			XdaiAdminContract: "0xd7586a62992dAe0227D341cC02414ABB93e0b555"
		},
		Wemix: {
			WemixMinterContract: "0xa70a4c074B93136405100FC6004cc27bDE16f602",
			MessageMultiSigWallet: "0x8e2cFeb906b293b329d3017eB55faff0EA0C6FF4",
			WemixAdminContract: "0x4eD917b4c9abda373d6CfcDE7Cc62c9b8beca494"
		},
		Governance: {
			Chain: "METADIUM",
			Address: "0x292A00F3b99e3CB9b324EdbaA92258C3C61b55ab",
			Bytes: "0x292A00F3b99e3CB9b324EdbaA92258C3C61b55ab",
			Id: "0xb835fb9684ac2ae102c51d53fd4e14a2b08e7fd163d7a6b1d59ad70cfd6c0c36"
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
