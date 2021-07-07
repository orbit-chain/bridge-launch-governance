const request = require('request-promise');
const IconService = require('icon-sdk-js');
const { IconAmount, IconBuilder, IconConverter, IconWallet, SignedTransaction } = IconService;

const setting = require('../settings');
const icon = new IconService(new IconService.HttpProvider(setting.Endpoints.Icon.api));

async function makeTx(_from, _to, _value, _method, _params) {
    const { CallTransactionBuilder } = IconBuilder;

    const from = _from;
    const to = _to;
    const method = _method;
    const params = _params;
    const value = IconAmount.of(_value, IconAmount.Unit.ICX).toLoop();

    const version = IconConverter.toBigNumber(setting.Endpoints.Icon.version);
    const nid = IconConverter.toBigNumber(setting.Endpoints.Icon.nid);
    const timestamp = (new Date()).getTime() * 1000;

    const builder = new CallTransactionBuilder();
    const transaction = builder
        .from(from)
        .to(to)
        .value(value)
        .nid(nid)
        .version(version)
        .timestamp(timestamp)
        .method(method)
        .params(params)
        .build()

    return transaction;
}

function makeRPCTransaction(_transaction) {
    _transaction.version = "0x" + _transaction.version.toString(16);
    _transaction.nid = "0x" + _transaction.nid.toString(16);
    _transaction.value = "0x" + _transaction.value.toString(16);
    _transaction.timestamp = "0x" + (parseInt(_transaction.timestamp)).toString(16);
    return JSON.parse(JSON.stringify(_transaction));
}

async function estimateStepLimit(_tx) {
    let transaction = makeRPCTransaction(_tx);
    //console.log(JSON.stringify(transaction));
    return request.post({
        headers: {'Content-Type': 'application/json'},
        url: setting.Endpoints.Icon.debug,
        body: {
            "jsonrpc": "2.0",
            "id": 1234,
            "method": "debug_estimateStep",
            "params": transaction
        },
        json: true
    })
    .then(body => {
        return body.result;
    });
}

(async () => {
    let pk;
   
    for (let arg of process.argv) {
      arg = arg.replace("0x", "");
      if (arg.length !== 64) {
        continue;
      }
      if (/[0-9A-Fa-f]{64}/g.test(arg) === false) {
        continue;
      }
      pk = arg;
      break;
    }

    const wallet = await IconWallet.loadPrivateKey(pk);
    const from = await wallet.getAddress();
    const to = setting.BridgeAddress.Icon.MessageMultiSigWallet;
    const method = "submitTransaction";
    const params = {
        _destination: "", //to,
        _method: "", //"addWalletOwner", 
        _params: JSON.stringify([ {
                name: "", //"_walletOwner",
                type: "", //"Address",
                value: "", //"hxb0e43e25be007150d25c1739e48f4d964e1c4924",
        }, ]),
    };

    const tx = await makeTx(from, to, 0, method, params);
    //console.log(tx);

    const stepLimit = await estimateStepLimit(tx);
    //console.log(stepLimit);

    tx.stepLimit = parseInt(stepLimit);
    const signedTx = new SignedTransaction(tx, wallet);
    console.log(await icon.sendTransaction(signedTx).execute());
})();
