# bridge-launch-governance

## Gather information of governance member
- push info into repository. here is [sample](./ozys-ethvault/ozys.json)
- eth_address required for ethvault
- eth_address, terra_pubkey and signed_message required for terravault

## Launch
- The *settings.js* file for each vault is here
  - [ozys-ethvault](./ozys-ethvault/settings.js)
- place your validator private key in *settings.js*
- replace file into [bridge-docker](https://github.com/orbit-chain/bridge-dockerize)

```bash
cp settings.js ~/bridge-dockerize/ethvault-validator/
```
