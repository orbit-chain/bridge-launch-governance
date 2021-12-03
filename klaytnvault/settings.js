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
    ],

    // Bridge Addresses
    BridgeAddress: {
        OrbitHubContract: "0xb5680a55d627c52de992e3ea52a86f19da475399",
        BscBridgeContract: "0x89c527764f03BCb7dC469707B23b79C1D7Beb780",
        HecoBridgeContract: "0xE7688F64e96A733EaDdCb5850392347e67Bb197f",
        KlaytnBridgeContract: "0x1af95905bb0042803f90e36d79d13aea6cd58969",
        OrbitBridgeContract: "0x77a49649964a186Fd2b8754758c39c9438a6E9aB",
        MessageMultiSigWallet: {
            Hub: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Orbit: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Avax: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Bsc: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Celo: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Fantom: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Harmony: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Heco: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Klaytn: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Matic: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Moonriver: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Oec: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            Xdai: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
        },
        Avax: {
            AvaxMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            AvaxAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Bsc: {
            BscMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            BscAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Celo: {
            CeloMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            CeloAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Fantom: {
            FantomMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            FantomAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Harmony: {
            HarmonyMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            HarmonyAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Heco: {
            HecoMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            HecoAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Klay: {
            KlaytnVaultContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
        },
        Matic: {
            MaticMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            MaticAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Moonriver: {
            MoonriverMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            MoonriverAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Oec: {
            OecMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            OecAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Xdai: {
            XdaiMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
            XdaiAdminContract: "0xBCa6cF429715704DeCcca162a4Cd239ad11ee467",
        },
        Orbit: {
            OrbitMinterContract: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            MessageMultiSigWallet: "0x1f4FA5c3B75688B6b896a6B045de2640c36b9B82",
        },
        Governance: {
            Chain: "KLAYTN",
            Address: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            Bytes: "0xA0CC1b5b83ADC65dE620AB63A893DB3bbEEaf586",
            Id: "0x11ce45d336cab080c911468b081132ab9ee575c9106e3296dc5bdec99f28edad",
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
            rpc : "https://rpc-mainnet.maticvigil.com",
            socket: "wss://rpc-mainnet.matic.quiknode.pro",
        },
        Moonriver: {
            rpc: "https://pub.elara.patract.io/moonriver",
            socket: "wss://pub.elara.patract.io/moonriver",
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