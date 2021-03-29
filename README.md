# bridge-launch-governance

## Gather information of governance member
- push info into repository. here is [sample](./ozys-ethvault/ozys.json)
- eth_address required for ethvault
- eth_address, terra_pubkey and signed_message required for terravault
- eth_address, xrp_address, xrp_address_converted_for_orbit_mig required for xrpvault

## Launch
- The *settings.js* file for each vault is here
  - [ozys-ethvault](./ozys-ethvault/settings.js)
  - [xrpvault](./xrpvault/settings.js)
- place your validator private key in *settings.js*
- if using [infura](https://infura.io) for eth node, place your infura project id in *settings.js* 
- replace file into [bridge-docker](https://github.com/orbit-chain/bridge-dockerize)

```bash
cp settings.js ~/bridge-dockerize/ethvault-validator/
```
