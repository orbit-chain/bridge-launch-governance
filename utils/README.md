# Utils
- All commands are assumed to run in the `utils` directory.

## Setting up environment
One need to clone repo first:

```bash
git clone https://github.com/orbit-chain/bridge-launch-governance.git
cd bridge-launch-governance/utils
```

## Create Validator Info
### via Docker
- It is possible to use the Docker image installed to some extent when operating the validator.
- Can remove the generated image with the command below.
```
sudo docker system prune -af
```
### via NVM
- install [nvm](https://github.com/nvm-sh/nvm)
```
nvm install v18.9.0
npm install -g yarn
```
### STACKS Layer1
- Generate validator 
```
sudo docker build -f stacks/Dockerfile --tag stacks.layer1:1.0 .
sudo docker run --rm stacks.layer1:1.0
```
```
yarn
node stacks/gen.validator.js
```
### TON Layer 1
- Generate validator
```
sudo docker build -f ton/Dockerfile --tag ton.layer1:1.0 .
sudo docker run --rm ton.layer1:1.0
```
```
yarn
node ton/gen.validator.js
```

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