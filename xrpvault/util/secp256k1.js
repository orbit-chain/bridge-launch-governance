const EC = require('elliptic').ec;
const secp256k1 = new EC('secp256k1');
const ethers = require('ethereumjs-util');
const keypairs = require('ripple-keypairs');
const addressCodec = require('ripple-address-codec');

function bytesToHex(a) {
  return a.map(function(byteValue) {
    const hex = byteValue.toString(16).toUpperCase()
    return hex.length > 1 ? hex : '0' + hex
  }).join('')
}

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
})

pks.forEach(pk => {
    pk = pk.replace("0x", "");
    let secret = "00" + pk.toUpperCase();
    let key = {
        privateKey: secret,
        publicKey: bytesToHex(secp256k1.keyFromPrivate(secret.slice(2)).getPublic().encodeCompressed()),
    }
    key.address = keypairs.deriveAddress(key.publicKey);

    console.log(`eth_address: 0x${ethers.publicToAddress(ethers.privateToPublic("0x" + pk)).toString("hex")}, xrp_address: ${key.address}, xrp_address_converted_for_orbit_mig: ${'0x' + Buffer.from(addressCodec.decode(key.address)).toString('hex')}`);
})
