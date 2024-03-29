const ethers = require("ethers");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const { createAddress, createStacksPrivateKey, getAddressFromPrivateKey, getPublicKey, TransactionVersion } = require("@stacks/transactions");

(async() => {
    const key = ec.genKeyPair();
    const evmPK = key.getPrivate("hex");
    const stacksAddress = getAddressFromPrivateKey(evmPK, TransactionVersion.Mainnet);
    const stacksPub = `0x${Buffer.from(getPublicKey(createStacksPrivateKey(evmPK)).data).toString("hex")}`;
    console.log({
        evmPK,
        ethAddress: ethers.utils.computeAddress(`0x${key.getPublic().encode("hex")}`),
        stacksAddress,
        stacksPub,
        hash160: createAddress(stacksAddress).hash160,
    });
})();