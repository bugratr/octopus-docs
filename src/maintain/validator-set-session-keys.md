## Set Session Keys

> **Note**:
>
> To execute this step, it is better that your validator node have completed the synchronization of the appchain data.

### Generating the Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. There are 2 options to associate your validator node with your validator account on the Appchain.

**Option 1: CLI**

It is easier to run the `author_rotateKeys` command on your remote server (e.g. AWS) where the validator node is deployed, and the node is running with the default HTTP RPC port configured:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

The output will have a hex-encoded "result" field which is the concatenation of the several public keys, save it as the session key which would be used in the next step.

```bash
{"jsonrpc":"2.0","result":"0xb143b87b83d16a43f444e94fed9cd87491802b9fae635c0de37b52609900fd398bbb0acd67d345a75ca0ef523acfc94fa63b462109f20684701a6150810231f7f92800d8f740e15187a4723f7671d0db7bb2ee46b87602b9f86bfa478a889c768da183a5d25673cf30424d649c95351a1c41f11c92c5bc8e84251406069999055a8cf21e44d9fd5fb41fa77ecb6cf0ea2ac62c4001083fd638fe70153a5f37c661","id":1}
```

**Option 2: PolkadotJS-Apps**

You can generate your Session keys in the client via the apps RPC. If you are doing this, make sure that you have the PolkadotJS-Apps explorer attached to your validator node. You can configure the apps dashboard to connect to the endpoint of your validator in the Settings tab.

Once ensuring that you have connected to your node, the easiest way to set session keys for your node is by calling the `author_rotateKeys` RPC request to create new keys in your validator's keystore. Navigate to Toolbox tab and select RPC Calls then select the `author > rotateKeys()` option and remember to save the output that you get back for a later step.

You can restart your node at this point.

You can login to the remote server where the validator node is deployed. If you are using a one-click deployment tool, the command is as follows:

```bash
docker restart seashell
```

### Submitting the `setKeys` Transaction

> **Note**: 
>
> * Polkadot{.js} Browser Plugin was installed;
> * The validator's appchain account should have a few the appchain native tokens.
>   * For the mainnet, if the account has no balance, you can exchange the appchain wrapped token in the NEAR network via [Ref Finance](https://app.ref.finance/), and then cross-chain transfer it to your validator account in the appchain via [Octopus Bridge](https://mainnet.oct.network/bridge).
>   * For the testnet, please request the appchain native tokens from `testnet` channel in Discord.

Go to the Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)), select the `Appchains` tab -> the corresponding appchain, and follow the steps to set the session keys:

1. Go to  **My Node**  panel, click `Set Session Key`, in the pop-up window, select your validator account, enter your `Session Key` which is the hex-encoded "result" field from the output content of `author_rotateKeys`;

![set session keys0](../images/maintain/validator_set_session_keys0.jpg)

2. Click `Set`.

![set session keys1](../images/maintain/validator_set_session_keys1.jpg)


### Check session keys via PolkadotJS-Apps

You can check whether your Session keys via the PolkadotJS-Apps, you can configure the `custom endpoint` with the appchain RPC endpoit which you can get it from Octopus Apps ([Mainnet](https://mainnet.oct.network) and [Testnet](https://testnet.oct.network)) appchain page.

Once ensuring that you have connected to appchain RPC endpoit, navigate to `Developer` tab and select `Chain State` then select the `session > nextKeys(AccountId32)` option, and select your validator account, and then click `+`. 

![check session keys](../images/maintain/validator_check_session_keys.jpg)

Check whether the return value is consistent with the Session keys you have set.