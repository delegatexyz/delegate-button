> This project has reached the end of its development and will not be supported for v2 of the registry. Check our our [@delegatexyz/delegate-javascript-sdk](https://github.com/delegatexyz/delegate-javascript-sdk) for registry integration.


# [delegatecash-button](https://delegate.xyz)

This library is a web component with various framework wrappers that, when given a connected wallet and an rpc network, will generate a pre-made UI component that allows you to select your delegated vaults from the [delegate.xyz](https://delegate.xyz) Relegation Registry.

### Usage Examples

[Javascript](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/vanilla) | [React](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/react) | [Svelte](https://github.com/delegatecash/delegatecash-button/tree/main/libraries/svelte)

## Properties

| Property                 | Attribute                  | Description                                           | Type      | Default            |
| ------------------------ | -------------------------- | ----------------------------------------------------- | --------- | ------------------ |
| `rpcUrl` _(required)_    | `rpc-url`                  | The rpc url of the network you want to use            | `string`  | `undefined`        |
| `connectedWallet`        | `connected-wallet`         | The current connected wallet                          | `string`  | `undefined`        |
| `label`                  | `label`                    | The main label (eg. "Mint", "Purchase")               | `string`  | `undefined`        |
| `disabled`               | `disabled`                 | Whether the main button is disabled or not            | `boolean` | `false`            |
| `contract`               | `contract`                 | Filter delegations by contract approval               | `string`  | `undefined`        |
| `tokenId`                | `token-id`                 | Filter delegations by tokenId approval                | `string`  | `undefined`        |
| `defaultWalletSelection` | `default-wallet-selection` | Auto-select a vault instead of connected wallet       | `string`  | `undefined`        |
| `defaultNoWalletLabel`   | `default-no-wallet-label`  | Default label when a connected wallet is not selected | `string`  | `'Connect Wallet'` |
| `forceDropdown`          | `force-dropdown`           | Force dropdown to be open                             | `boolean` | `false`            |
| `rounded`                | `rounded`                  | If you want rounded corners                           | `boolean` | `false`            |
| `theme`                  | `theme`                    | Light or Dark theme                                   | `string`  | `'light'`          |

## Events

| Event          | Description                                 | Type                  |
| -------------- | ------------------------------------------- | --------------------- |
| `buttonClick`  | When the main button is clicked             | `CustomEvent<string>` |
| `walletSelect` | When a wallet is selected from the dropdown | `CustomEvent<string>` |
