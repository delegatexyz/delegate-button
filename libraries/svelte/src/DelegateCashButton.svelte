<script>
  import { createEventDispatcher } from 'svelte';
  import "delegatecash-button";

  const dispatch = createEventDispatcher();

  export let label;
  export let connectedWallet;
  export let rpcUrl;

  export let defaultWalletSelection = undefined;
  export let contract = undefined;
  export let tokenId = undefined;

  export let theme = 'light';
  export let rounded = true;
  export let forceDropdown = false;
  
</script>

{#if label && connectedWallet && rpcUrl}
  <delegate-cash-button 
    label={label}
    connected-wallet={connectedWallet}
    rpc-url={rpcUrl} 
    default-wallet-selection={defaultWalletSelection}
    contract={contract}
    token-id={tokenId}
    theme={theme}
    rounded={rounded}
    force-dropdown={forceDropdown}
    on:buttonClick={event => dispatch("buttonClick", event.detail)}
    on:walletSelect={event => dispatch("walletSelect", event.detail)}
  />
{/if}