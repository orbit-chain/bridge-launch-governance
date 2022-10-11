module.exports = {
    chainList: ["faireth", "orbit", "klaytn", "matic"],
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        FairethBridgeContract: "0xd01c3EFa0d27d0Dc1Cc33d4b4c28635F8e362359",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        MaticBridgeContract: "0x1Fc5A2cE72c71563E6EFC1fc35F326D4CCd23B93",
        MessageMultiSigWallet: {
            hub: "0x03338A261E924c72E6A15A889dB69206265645F8",
            Faireth: "0x03338A261E924c72E6A15A889dB69206265645F8",
            Klaytn: "0x03338A261E924c72E6A15A889dB69206265645F8",
            Orbit: "0x03338A261E924c72E6A15A889dB69206265645F8",
            Matic: "0x03338A261E924c72E6A15A889dB69206265645F8",
        },
        Faireth: {
            FairethVaultContract: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            MessageMultiSigWallet: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
        },
        Orbit: {
            OrbitMinterContract: "0xE230fC1FC25C23a251A0aa2629A21fcB4E605Ccd",
            MessageMultiSigWallet: "0x03338A261E924c72E6A15A889dB69206265645F8",
        },
        Klay: {
            KlaytnMinterContract: "0x193E27F9781cA3E830EC08e2E4fd85E3a3431367",
            MessageMultiSigWallet: "0x134A28317f21922d5e4b779c58b6E760419c50D0",
        },
        Matic: {
            MaticMinterContract: "0xA5f339Eb80F39821d24809AE7680AC6d0653D9Fb",
            MessageMultiSigWallet: "0x511A1D47D50387d789531a1f2f1B4e97fDD90106",
            MaticAdminContract: "0x0e51130ec74Ebd4db12C93397b4982BFF277862c",
        },
        Governance: {
            Chain: "FAIRETH",
            Address: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            Bytes: "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
            Id: "0x9ae05b121092263d4dfeaacff02f48fbe357396c486680db00528e89f7ccb7dc",
        },
    },
    Endpoints: {
        Orbit: {
            rpc: "https://bridge-en.orbitchain.io:7443",
            socket: "wss://bridge-en.orbitchain.io:7444",
        },
        Faireth: {
            rpc: "https://rpc.etherfair.org",
            socket: "wss://rpc.etherfair.org",
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
    },
    FAIRETH_CHAIN_ID: "0x7D44C",
    MATIC_CHAIN_ID: "0x89",
    VALIDATOR_ACCOUNT: {
        TYPE: "PK",
        DATA: "0000000000000000000000000000000000000000000000000000000000000000",
    },
    VALIDATOR_MONITOR: {
        Ozys: {
            Endpoint: "https://bridge-en.orbitchain.io:7743/v1/validator/report",
            Interval: 60000,
        },
    },
};
