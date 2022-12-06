# [delegatecash-button](https://delegate.cash) &middot; ![NPM](https://img.shields.io/npm/l/delegatecash-button?registry_uri=https%3A%2F%2Fregistry.npmjs.com) ![npm (tag)](https://img.shields.io/npm/v/delegatecash-button/latest) ![npm bundle size](https://img.shields.io/bundlephobia/min/delegatecash-button) [![Twitter URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fdelegatecash)](https://twitter.com/delegatecash)

This library is a UI component that when given a connected wallet and an rpc network, it will generate a pre-made UI component that allows you to select your delegated vaults from the [delegate.cash](https://delegate.cash) Relegation Registry.

### Usage Examples

Javascript | [React](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/react) | [Svelte](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/svelte)

```javascript
<html>
  <head>
    <script
      src="https://cdn.jsdelivr.net/npm/delegatecash-button@latest/delegate-cash-button.js"
      type="module"
    ></script>
  </head>
  <body>
    <delegate-cash-button
      label="Mint"
      connected-wallet="0x0000000000000000000000000000000000000001"
      rpc-url="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
      rounded="true"
    />
  </body>
</html>
```

## Properties

| Property                        | Description                                     | Type      | Default     |
| ------------------------------- | ----------------------------------------------- | --------- | ----------- |
| `connected-wallet` _(required)_ | The current connected wallet                    | `string`  | `undefined` |
| `rpc-url` _(required)_          | The rpc url of the network you want to use      | `string`  | `undefined` |
| `label` _(required)_            | The main label (eg. "Mint", "Purchase")         | `string`  | `undefined` |
| `contract`                      | Filter delegations by contract approval         | `string`  | `undefined` |
| `token-id`                      | Filter delegations by tokenId approval          | `string`  | `undefined` |
| `default-wallet-welection`      | Auto-select a vault instead of connected wallet | `string`  | `undefined` |
| `force-dropdown`                | Force dropdown to be open                       | `boolean` | `false`     |
| `rounded`                       | If you want rounded corners                     | `boolean` | `false`     |
| `theme`                         | Light or Dark theme                             | `string`  | `'light'`   |

## Events

| Event          | Description                                 | Type                  |
| -------------- | ------------------------------------------- | --------------------- |
| `buttonClick`  | When the main button is clicked             | `CustomEvent<string>` |
| `walletSelect` | When a wallet is selected from the dropdown | `CustomEvent<string>` |
