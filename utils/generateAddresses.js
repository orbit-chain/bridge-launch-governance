const {
    createAddress,
    createStacksPrivateKey,
    getAddressFromPrivateKey,
    getPublicKey,
    TransactionVersion,
} = require("@stacks/transactions");
const ethers = require("ethers");
const EC = require("elliptic").ec;
const TonWeb = require("tonweb");

const ec = new EC("secp256k1");
const nacl = TonWeb.utils.nacl;

const DEFAULT_WALLET_VERSION = "v3R2";

const mainnetRpc = "https://toncenter.com/api/v2/jsonRPC";
const testnetRpc = "https://testnet.toncenter.com/api/v2/jsonRPC";

const apiKey = "";
const isTestnet = false;

(async () => {
    let ton = new TonWeb(
        new TonWeb.HttpProvider(isTestnet ? testnetRpc : mainnetRpc, {
            apiKey: apiKey,
        })
    );

    const evmPK = process.argv[2];
    const key = ec.keyFromPrivate(evmPK);
    const tonPK = Buffer.from(evmPK.replace("0x", ""), "hex").toString(
        "base64"
    );

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

    const stacksUncompressedAddress = getAddressFromPrivateKey(evmPK, TransactionVersion.Mainnet);
    const stacksUncompressedPub = `0x${Buffer.from(getPublicKey(createStacksPrivateKey(evmPK)).data).toString("hex")}`;

    const stacksCompressedAddress = getAddressFromPrivateKey(`${evmPK}01`, TransactionVersion.Mainnet);
    const stacksCompressedPub = `0x${Buffer.from(getPublicKey(createStacksPrivateKey(evmPK + "01")).data).toString("hex")}`;

    console.log({
        ethAddress: ethers.utils.computeAddress(
            `0x${key.getPublic().encode("hex")}`
        ),
        tonV3R2Address,
        ethPublic: `0x${key.getPublic().encode("hex")}`,
        tonPublic: `0x${Buffer.from(keyPair.publicKey).toString("hex")}`,
        // stacksUncompressedAddress,
        // stacksUncompressedPub,
        // stacksUncompressedHash160: createAddress(stacksUncompressedAddress).hash160,
        stacksCompressedAddress,
        stacksCompressedPub,
        stacksCompressedHash160: createAddress(stacksCompressedAddress).hash160,
    });
})();
