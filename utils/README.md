# Utils
- All commands are assumed to run in the `utils` directory.

## Setting up environment
One need to clone repo first:

```bash
git clone https://github.com/orbit-chain/bridge-launch-governance.git
cd bridge-launch-governance/utils
```

## Create Validator Info
### via NVM
- install [nvm](https://github.com/nvm-sh/nvm)
```
nvm install v18.9.0
npm install -g yarn
```
<br/>

### Generate validator addresses and private key
- vault chain list: bsc, ethereum, klaytn, metadium, polygon, ton, wemix, ripple
```
yarn
node generatePk.js <chain>
```
  
- `generatePk.js` returns:
```
{
    "eth_address": "",  // required
    "ethPublic": "",  // required
    "tonV3R2Address": "",
    "tonPublic": "",
    "icon_address": "",
    "xrp_address": "",
    "xrp_address_converted_for_orbit_mig": ""
}
```
<br/>

### Generate TON, ICON addresses by private key
```
yarn
node generateAddresses.js <pk>
```

- `generateAddresses.js` returns:
```
{
    "eth_address": "",
    "tonV3R2Address": "",
    "ethPublic": "",
    "tonPublic": "",
    "icon_address": "",
}
```