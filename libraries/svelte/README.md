# [delegatecash-button-svelte](https://delegate.cash) &middot; ![NPM](https://img.shields.io/npm/l/delegatecash-button-svelte?registry_uri=https%3A%2F%2Fregistry.npmjs.com) ![npm (tag)](https://img.shields.io/npm/v/delegatecash-button-svelte/latest) ![npm bundle size](https://img.shields.io/bundlephobia/min/delegatecash-button-svelte) [![Twitter URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fdelegatecash)](https://twitter.com/delegatecash)

This library is a component that, when given a connected wallet and an rpc network, will generate a pre-made UI component that allows you to select your delegated vaults from the [delegate.cash](https://delegate.cash) Relegation Registry.

### Usage Examples

[Javascript](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/vanilla) | [React](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/react) | Svelte

```svelte
<script>
  import DelegateCashButton from "delegatecash-button-svelte";
</script>

<DelegateCashButton
  label="Purchase"
  connectedWallet="0x0000000000000000000000000000000000000001"
  rpcUrl="https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  rounded={true}
  on:buttonClick={event => console.log(event.detail)}
  on:walletSelect={event => console.log(event.detail)}
/>
```

## Properties

| Property                 | Description                                           | Type      | Default            |
| ------------------------ | ----------------------------------------------------- | --------- | ------------------ |
| `rpcUrl` _(required)_    | The rpc url of the network you want to use            | `string`  | `undefined`        |
| `connectedWallet`        | The current connected wallet                          | `string`  | `undefined`        |
| `label`                  | The main label (eg. "Mint", "Purchase")               | `string`  | `undefined`        |
| `disabled`               | Whether the main button is disabled or not            | `boolean` | `undefined`        |
| `contract`               | Filter delegations by contract approval               | `string`  | `undefined`        |
| `tokenId`                | Filter delegations by tokenId approval                | `string`  | `undefined`        |
| `defaultWalletSelection` | Auto-select a vault instead of connected wallet       | `string`  | `undefined`        |
| `defaultNoWalletLabel`   | Default label when a connected wallet is not selected | `string`  | `'Connect Wallet'` |
| `forceDropdown`          | Force dropdown to be open                             | `boolean` | `false`            |
| `rounded`                | If you want rounded corners                           | `boolean` | `false`            |
| `theme`                  | Light or Dark theme                                   | `string`  | `'light'`          |

## Events

| Event          | Description                                 | Type                  |
| -------------- | ------------------------------------------- | --------------------- |
| `buttonClick`  | When the main button is clicked             | `CustomEvent<string>` |
| `walletSelect` | When a wallet is selected from the dropdown | `CustomEvent<string>` |
