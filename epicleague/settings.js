module.exports = {
    chainList: [
        "eth-v2",
        "bsc",
        "matic",
        "orbit"
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xa48D8B9d5208e3e8738f27d52347A5e5897025a5",
        EthBridgeContract: "0x3c9d6C4028c7ECa1c8E4071844f9955ddF865265",
        BscBridgeContract: "0x3E9C6f98f4AC515706e18c29ABe8E6756968d261",
        MaticBridgeContract: "0x4d4b894929ec4ac10107Bf9F78D5254bDFd93c18",
        OrbitBridgeContract: "0x37279579169e5AeC51b0C432e74F230b6e075D05",
        MessageMultiSigWallet: {
            hub: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            Eth: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            Bsc: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            Matic: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            Orbit: "0xbbf04C01AAA813c61525551e4d8014A2001500E3"
        },
        Eth: {
            EthVaultContract: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            MessageMultiSigWallet: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb"
        },
        Bsc: {
            BscMinterContract: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            MessageMultiSigWallet: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            BscAdminContract: "0xef6D4C123078409f49037a85D3ADbcc5411DeA33"
        },
        Matic: {
            MaticMinterContract: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            MessageMultiSigWallet: "0xbbf04C01AAA813c61525551e4d8014A2001500E3",
            MaticAdminContract: "0xef6D4C123078409f49037a85D3ADbcc5411DeA33"
        },
        Orbit: {
            OrbitMinterContract: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            MessageMultiSigWallet: "0xbbf04C01AAA813c61525551e4d8014A2001500E3"
        },
        Governance: {
            Chain: "ETH",
            Address: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            Bytes: "0x09Ac709B11E1B7d08E8bcab0472674a9d77B13eb",
            Id: "0xd4ff2b907575ecee91528be826b644668b6017edb704f1a4fe8abb63123b75ff"
        }
    },

    // Node Endpoints
    Endpoints : {
        Orbit: {
            rpc : "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Bsc: {
            rpc : ["https://bsc-mainnet-rpc.allthatnode.com", "https://bsc-dataseed.binance.org",],
            socket: "wss://bsc-ws-node.nariox.org:443",
        },
        Eth: {
            rpc: ["https://ethereum-mainnet-rpc.allthatnode.com", "https://mainnet.infura.io/v3/[PROJECT_ID]", "https://rpc.ankr.com/eth", "https://eth.chain-node.orbitchain.io:7643", ],
            socket: "wss://mainnet.infura.io/ws/v3/[PROJECT_ID]",
            beacon: "https://beacon.chain-node.orbitchain.io:7643",
        },
        Matic: {
            rpc: ["https://polygon-mainnet-rpc.allthatnode.com:8545", "https://polygon-rpc.com", "https://matic.chain-node.orbitchain.io:7643",],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
    },

    BSC_CHAIN_ID: '0x38',
    ETH_CHAIN_ID: '0x1',
    MATIC_CHAIN_ID: '0x89',

    ETH_TERMINAL_TOTAL_DIFFICULTY: "58750000000000000000000",

    DEBUG: true,
    LOGLEVEL: 'debug',

    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/epicleague/v1/validator/report",
            Interval: 60 * 1000,
        },
    },

    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },
}
