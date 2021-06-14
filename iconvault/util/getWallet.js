const ethers = require('ethereumjs-util');
const IconService = require('icon-sdk-js');
const { IconWallet } = IconService;

(async () => {
    let pks = [];
    process.argv.forEach(arg => {
      let pk = arg.replace("0x", "");
      if (pk.length !== 64) {
        return;
      }
      if (/[0-9A-Fa-f]{64}/g.test(pk) === false) {
        return;
      }
      pks.push(pk);
    });

    pks.forEach(async (pk) => {
        pk = pk.replace("0x", "");
        const wallet = await IconWallet.loadPrivateKey(pk);
        console.log(`ETH-ADDRESS: 0x${ethers.publicToAddress(ethers.privateToPublic("0x" + pk)).toString("hex")}`);
        console.log(`ICON-ADDRESS: ${wallet.getAddress()}`);
    });
})();
