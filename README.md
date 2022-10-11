# bridge-launch-governance

## Gather information of governance member
1. Fork this repo
2. Add a new `.json` file with the same name as your team name under the chain folder you want to join as validator.  
ex) [`./eth/ozys.json`](./eth/ozys.json), [`./xrpvault/ozys.json`](./xrp/ozys.json)
3. Fill out the information using the format by chain below.   

EVM:   
- `eth_address` is required for evm chains like `eth`, `bscvault`, `celovault`, `hecovault`, `klaytnvault`, `polygon`
```json
{
    "name": "",
    "eth_address": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```

STACKS:   
- `stacks_address`, `stacks_pub`, `hash160` must be written, and these should be generated from the same private key as `eth_address`.
- `stacks_address`, `stacks_pub`, `hash160` can be made using [KEY UTILS DOC](./utils/README.md)
```json
{
    "name": "",
    "eth_address": "",
    "stacks_address": "",
    "stacks_pub": "",
    "hash160": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```

XRP:   
- `xrp_address`, `xrp_address_converted_for_orbit_mig` must be written, and these should be generated from the same private key as `eth_address`. 
- `xrp_address`, `xrp_address_converted_for_orbit_mig` can be made using [XRP KEY UTIL DOC](./xrp/util/secp256k1.js)
```json
{
    "name": "",
    "eth_address": "",
    "xrp_address": "",
    "xrp_address_converted_for_orbit_mig": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```

TON:   
- `tonV3R2Address`, `ethPublic`, `tonPublic` must be written, and these should be generated from the same private key as `eth_address`.
- `tonV3R2Address`, `ethPublic`, `tonPublic` can be made using [KEY UTILS DOC](./utils/README.md)
```json
{
    "name": "",
    "eth_address": "",
    "tonV3R2Address": "",
    "ethPublic": "",
    "tonPublic": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```

ICON:   
- `icon_address` must be written, and these should be generated from the same private key as `eth_address`.
- `icon_address` can be made using [ICON KEY UTIL DOC](./iconvault/util/getWallet.js) 
```json
{
    "name": "",
    "eth_address": "",
    "icon_address": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```
   
4. Make a Pull Request with the changes, to the `master` bridge-launch-governance repo.
<br/>
<br/>

---
## Launch
- The *settings.js* file for each vault is here
  - [ethvault](./eth/settings.js)
  - [bscvault](./bscvault/settings.js)
  - [celovault](./celovault/settings.js)
  - [hecovault](./hecovault/settings.js)
  - [klaytnvault](./klaytnvault/settings.js)
  - [polygon](./polygon/settings.js)
  - [xrpvault](./xrp/settings.js)
- place your validator private key in *settings.js*
- if using [infura](https://infura.io) for eth node, place your infura project id in *settings.js* 
- replace file into [bridge-docker](https://github.com/orbit-chain/bridge-dockerize)

```bash
cp settings.js ~/bridge-dockerize/ethvault-validator/
```
