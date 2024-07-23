const ethers = require("ethers");
const crypto = require("crypto");

const IconService = require("icon-sdk-js");
const { IconWallet } = IconService;

const EC = require("elliptic").ec;
const TonWeb = require("tonweb");

const ec = new EC("secp256k1");
const nacl = TonWeb.utils.nacl;

const DEFAULT_WALLET_VERSION = "v3R2";

const mainnetRpc = "https://toncenter.com/api/v2/jsonRPC";
const testnetRpc = "https://testnet.toncenter.com/api/v2/jsonRPC";

const apiKey = "";
const isTestnet = false;

const keypairs = require("ripple-keypairs");
const addressCodec = require("ripple-address-codec");

const VALID_CHAINS = [
    "bsc",
    "ethereum",
    "klaytn",
    "metadium",
    "polygon",
    "ton",
    "wemix",
    "ripple",
];
const CHAIN_CONTAINS_ICON = ["ethereum"];
const CHAIN_CONTAINS_TON = [
    "bsc",
    "ethereum",
    "klaytn",
    "metadium",
    "polygon",
    "ton",
    "wemix"
];

function bytesToHex(a) {
    return a
        .map(function (byteValue) {
            const hex = byteValue.toString(16).toUpperCase();
            return hex.length > 1 ? hex : "0" + hex;
        })
        .join("");
}

(async () => {
    if (!process.argv[2]) {
        console.log(`Chain not found.`);
        console.log(`* valid chains list: ${VALID_CHAINS.join(", ")}`);
        return;
    }

    let vaultChain = process.argv[2].toLowerCase();
    if (!VALID_CHAINS.includes(vaultChain)) {
        console.log(`Invalid chain.`);
        console.log(`* valid chains list: ${VALID_CHAINS.join(", ")}`);
        return;
    }

    const evmPK = crypto.randomBytes(32).toString("hex");
    const key = ec.keyFromPrivate(evmPK);

    let addrObj = {
        eth_address: ethers.utils.computeAddress(
            `0x${key.getPublic().encode("hex")}`
        ),
        ethPublic: `0x${key.getPublic().encode("hex")}`,
    };

    if (CHAIN_CONTAINS_TON.includes(vaultChain)) {
        let ton = new TonWeb(
            new TonWeb.HttpProvider(isTestnet ? testnetRpc : mainnetRpc, {
                apiKey: apiKey,
            })
        );

        const tonPK = Buffer.from(evmPK, "hex").toString("base64");

        const keyPair = nacl.sign.keyPair.fromSeed(
            TonWeb.utils.base64ToBytes(tonPK)
        );
        const walletVersion = DEFAULT_WALLET_VERSION;
        const WalletClass = ton.wallet.all[walletVersion];
        walletContract = new WalletClass(ton.provider, {
            publicKey: keyPair.publicKey,
            wc: 0,
        });

        const addr = await walletContract.getAddress();
        const tonV3R2Address = addr.toString(true, true, true);

        addrObj.tonV3R2Address = tonV3R2Address;
        addrObj.tonPublic = `0x${Buffer.from(keyPair.publicKey).toString(
            "hex"
        )}`;
    }

    if (CHAIN_CONTAINS_ICON.includes(vaultChain)) {
        const wallet = await IconWallet.loadPrivateKey(evmPK);
        addrObj.icon_address = wallet.getAddress();
    }

    if (vaultChain === "ripple") {
        let secret = "00" + evmPK.toUpperCase();
        let key = {
            privateKey: secret,
            publicKey: bytesToHex(ec.keyFromPrivate(secret.slice(2)).getPublic().encodeCompressed()),
        };
        key.address = keypairs.deriveAddress(key.publicKey);

        addrObj.xrp_address = key.address
        addrObj.xrp_address_converted_for_orbit_mig = "0x" + Buffer.from(addressCodec.decode(key.address)).toString("hex")
    }

    console.log("=========================================================================");
    console.log("* EVM address:", addrObj.eth_address);
    console.log("* pk:", evmPK);
    console.log("=========================================================================\n");

    console.log(JSON.stringify(addrObj, null, 2));
})();
