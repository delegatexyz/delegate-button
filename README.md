# [delegatecash-button](https://delegate.cash) &middot; ![NPM](https://img.shields.io/npm/l/delegatecash-button?registry_uri=https%3A%2F%2Fregistry.npmjs.com) ![npm (tag)](https://img.shields.io/npm/v/delegatecash-button/latest) ![npm bundle size](https://img.shields.io/bundlephobia/min/delegatecash-button) [![Twitter URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fdelegatecash)](https://twitter.com/delegatecash)

This library is a web component with various framework wrappers that, when given a connected wallet and an rpc network, will generate a pre-made UI component that allows you to select your delegated vaults from the [delegate.cash](https://delegate.cash) Relegation Registry.

### Usage Examples

[Javascript](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/vanilla) | [React](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/react) | [Svelte](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/svelte)

## Properties

| Property                 | Attribute                  | Description                                     | Type      | Default     |
| ------------------------ | -------------------------- | ----------------------------------------------- | --------- | ----------- |
| `rpcUrl` _(required)_    | `rpc-url`                  | The rpc url of the network you want to use      | `string`  | `undefined` |
| `connectedWallet`        | `connected-wallet`         | The current connected wallet                    | `string`  | `undefined` |
| `label`                  | `label`                    | The main label (eg. "Mint", "Purchase")         | `string`  | `undefined` |
| `disabled`               | `disabled`                 | Whether the main button is disabled or not      | `boolean` | `undefined` |
| `contract`               | `contract`                 | Filter delegations by contract approval         | `string`  | `undefined` |
| `tokenId`                | `token-id`                 | Filter delegations by tokenId approval          | `string`  | `undefined` |
| `defaultWalletSelection` | `default-wallet-selection` | Auto-select a vault instead of connected wallet | `string`  | `undefined` |
| `forceDropdown`          | `force-dropdown`           | Force dropdown to be open                       | `boolean` | `false`     |
| `rounded`                | `rounded`                  | If you want rounded corners                     | `boolean` | `false`     |
| `theme`                  | `theme`                    | Light or Dark theme                             | `string`  | `'light'`   |

## Events

| Event          | Description                                 | Type                  |
| -------------- | ------------------------------------------- | --------------------- |
| `buttonClick`  | When the main button is clicked             | `CustomEvent<string>` |
| `walletSelect` | When a wallet is selected from the dropdown | `CustomEvent<string>` |
