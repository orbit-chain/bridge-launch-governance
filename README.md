# bridge-launch-governance

## Gather information of governance member
- push info into repository. here is [sample](./eth/ozys.json)
- eth_address required for `ethvault`, `bscvault`, `celovault`
- eth_address, terra_pubkey and signed_message required for terravault
- eth_address, xrp_address, xrp_address_converted_for_orbit_mig required for xrpvault
  - [XRP KEY UTIL DOC](./xrpvault/keyUtil.md)
- eth_address, icon_address
  - [ICON UTIL DOC](./iconvault/util.md)

## Launch
- The *settings.js* file for each vault is here
  - [ozys-ethvault](./eth/settings.js)
  - [xrpvault](./xrpvault/settings.js)
  - [bscvault](./bscvault/settings.js)
  - [celovaul](./celovault/settings.js)
  - [klaytnvault](./klaytnvault/settings.js)
  - [hecovault](./hecovault/settings.js)
- place your validator private key in *settings.js*
- if using [infura](https://infura.io) for eth node, place your infura project id in *settings.js* 
- replace file into [bridge-docker](https://github.com/orbit-chain/bridge-dockerize)

```bash
cp settings.js ~/bridge-dockerize/ethvault-validator/
```
