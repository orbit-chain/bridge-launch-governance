module.exports = {
    chainList: ["poweth", "orbit", "klaytn", "matic"],
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        PowethBridgeContract: "0x2E5Dd12652E4032d127C2A078De7FAeB53a4eC9e",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            hub: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
            Poweth: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
            Orbit: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
            Matic: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
            Klaytn: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
        },
        Poweth: {
            PowethVaultContract: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            MessageMultiSigWallet: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
        },
        Orbit: {
            OrbitMinterContract: "0x5E4b2b056897C7dC534858de15A0d5A9Cb47a8eF",
            MessageMultiSigWallet: "0x3A10e1288B14c48ed49aF25303B8d58F87e625F1",
        },
        Klay: {
            KlaytnMinterContract: "0xCa223A1727B1878655E436eb546Be1C71Cac1adC",
            MessageMultiSigWallet: "0xE3F9C9E3907d6Ff40Af8D045083fed44790fD2Ac",
        },
        Matic: {
            MaticMinterContract: "0xCc2dC439057aDa77aE41CA3d2820a2b37c88FE9C",
            MessageMultiSigWallet: "0xDA43E983986910a280d4e9001032aC17B54EBE74",
            MaticAdminContract: "0x3f2e90D5035032e3f2eCF6FeD9106062e590A82C",
        },
        Governance: {
            Chain: "POWETH",
            Address: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            Bytes: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            Id: "0xdf7ed42db32a9c0ec6fdbe550513f04192fa4bfdfb44bc30f84a1ec8ded49e63",
        },
    },
    Endpoints: {
        Orbit: {
            rpc: "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Poweth: {
            rpc: "https://mainnet.ethereumpow.org",
            socket: "wss://mainnet.ethereumpow.org",
        },
        Matic: {
            rpc: [
                "https://polygon-rpc.com",
                "https://polygon-mainnet-rpc.allthatnode.com:8545",
                "https://matic-mainnet.chainstacklabs.com",
                "https://matic-mainnet-full-rpc.bwarelabs.com",
                "https://matic.chain-node.orbitchain.io:7643",
            ],
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Klaytn: {
            isKas: false,
            rpc: [
                "https://klaytn-mainnet-rpc.allthatnode.com:8551",
                "https://public-node-api.klaytnapi.com/v1/cypress",
                "https://klaytn03.fandom.finance",
            ],
            socket: "",
            Kas: {
                rpc: "https://node-api.klaytnapi.com/v1/klaytn",
                chainId: 8217,
                accessKeyId: "",
                secretAccessKey: "",
            },
        },
    },
    POWETH_CHAIN_ID: "0x2711",
    MATIC_CHAIN_ID: "0x89",
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },
    VALIDATOR_MONITOR: {
        Ozys: {
<<<<<<< HEAD
            Endpoint:
                "https://bridge-en.orbitchain.io:7443/powethvault/v1/validator/report",
=======
            Endpoint: "https://bridge-en.orbitchain.io:7743/v1/validator/report",
>>>>>>> 2c8ec32fc73e032c80535223769414e19a435b40
            Interval: 60000,
        },
    },
};
