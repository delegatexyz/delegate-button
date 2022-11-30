# delegate-cash-button

## Usage

```
<delegate-cash-button
  label="Purchase"
  connected-wallet="0x0000000000000000000000000000000000000001"
  rpc-url="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  rounded="true"
/>
```

<!-- Auto Generated Below -->

## Properties

| Property                       | Attribute                  | Description                                     | Type      | Default     |
| ------------------------------ | -------------------------- | ----------------------------------------------- | --------- | ----------- |
| `connectedWallet` _(required)_ | `connected-wallet`         | The current connected wallet                    | `string`  | `undefined` |
| `contract`                     | `contract`                 | Filter delegations by contract approval         | `string`  | `undefined` |
| `defaultWalletSelection`       | `default-wallet-selection` | Auto-select a vault instead of connected wallet | `string`  | `undefined` |
| `forceDropdown`                | `force-dropdown`           | Force dropdown to be open                       | `boolean` | `false`     |
| `label` _(required)_           | `label`                    | The main label (eg. "Mint", "Purchase")         | `string`  | `undefined` |
| `rounded`                      | `rounded`                  | If you want rounded corners                     | `boolean` | `false`     |
| `rpcUrl` _(required)_          | `rpc-url`                  | The rpc url of the network you want to use      | `string`  | `undefined` |
| `theme`                        | `theme`                    | Light or Dark theme                             | `string`  | `'light'`   |
| `tokenId`                      | `token-id`                 | Filter delegations by tokenId approval          | `string`  | `undefined` |

## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `buttonClick`  |             | `CustomEvent<string>` |
| `walletSelect` |             | `CustomEvent<string>` |

## Methods

### `refresh() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `updateConnectedWallet(newWallet: string) => Promise<void>`

#### Returns

Type: `Promise<void>`

### `updateSelectedWallet(newWallet: string) => Promise<void>`

#### Returns

Type: `Promise<void>`

---

_Built with [StencilJS](https://stenciljs.com/)_
