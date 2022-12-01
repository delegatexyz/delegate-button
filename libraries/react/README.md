# delegatecash-button-react

## Usage

```
<script>
  import DelegateCashButton from "delegatecash-button-react";
</script>

<DelegateCashButton
  label="Purchase"
  connectedWallet="0x0000000000000000000000000000000000000001"
  rpcUrl="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  rounded={true}
  onButtonClick={event => console.log(event.detail)}
  onWalletSelect={event => console.log(event.detail)}
/>
```

## Properties

| Property                       | Description                                     | Type      | Default     |
| ------------------------------ | ----------------------------------------------- | --------- | ----------- |
| `connectedWallet` _(required)_ | The current connected wallet                    | `string`  | `undefined` |
| `contract`                     | Filter delegations by contract approval         | `string`  | `undefined` |
| `defaultWalletSelection`       | Auto-select a vault instead of connected wallet | `string`  | `undefined` |
| `forceDropdown`                | Force dropdown to be open                       | `boolean` | `false`     |
| `label` _(required)_           | The main label (eg. "Mint", "Purchase")         | `string`  | `undefined` |
| `rounded`                      | If you want rounded corners                     | `boolean` | `false`     |
| `rpcUrl` _(required)_          | The rpc url of the network you want to use      | `string`  | `undefined` |
| `theme`                        | Light or Dark theme                             | `string`  | `'light'`   |
| `tokenId`                      | Filter delegations by tokenId approval          | `string`  | `undefined` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `buttonClick`  |             | `CustomEvent<string>` |
| `walletSelect` |             | `CustomEvent<string>` |