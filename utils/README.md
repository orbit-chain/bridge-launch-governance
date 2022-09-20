# Utils
- All commands are assumed to run in the `utils` directory.

## Create Validator Info
### STACKS Layer1
#### via Docker
- It is possible to use the Docker image installed to some extent when operating the validator.
- Generate validator 
```
sudo docker build -f stacks/Dockerfile --tag stacks.layer1:1.0 .
sudo docker run --rm stacks.layer1:1.0
```
- Can remove the generated image with the command below.
```
sudo docker system prune -af
```
#### via NVM
- install [nvm](https://github.com/nvm-sh/nvm)
```
nvm install v18.9.0
npm install -g yarn
yarn
node stacks/gen.validator.js
```
