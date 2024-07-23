# bridge-launch-governance

## Gather information of governance member
1. Fork this repo
2. Add a new `.json` file with the same name as your team name under the chain folder you want to join as validator.  
ex) [`./eth/ozys.json`](./eth/ozys.json), [`./xrpvault/ozys.json`](./xrp/ozys.json)
3. Fill out the information using the format by chain below.   

**Team Infomation**:
```json
{
    "name": "",
    "homepage": "",
    "contact": "",
    "location": "",
    "logo": "",
    "description": ""
}
```
<br/>

**Address Infomation**:
- Address for validating can be generated using `./utils/generatePk.js` [KEY UTIL DOC](./utils/README.md)
```json
{
    "eth_address": "",  // required
    "ethPublic": "",  // required
    "tonV3R2Address": "",
    "tonPublic": "",
    "icon_address": "",
    "xrp_address": "",
    "xrp_address_converted_for_orbit_mig": ""
}
}
```

4. Make a Pull Request with the changes, to the `master` bridge-launch-governance repo.
<br/>
<br/>