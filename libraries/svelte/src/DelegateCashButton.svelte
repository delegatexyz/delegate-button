<script>
  import { createEventDispatcher } from 'svelte';
  import "delegatecash-button";

  const dispatch = createEventDispatcher();

  export let rpcUrl;

  export let label = undefined;
  export let connectedWallet = undefined;
  export let disabled = false;
  export let defaultWalletSelection = undefined;
  export let defaultNoWalletLabel = undefined;
  export let contract = undefined;
  export let tokenId = undefined;

  export let theme = 'light';
  export let rounded = true;
  export let forceDropdown = false;
  
</script>

{#if rpcUrl}
  <delegate-cash-button 
    label={label}
    connected-wallet={connectedWallet}
    rpc-url={rpcUrl} 
    disabled={disabled}
    default-wallet-selection={defaultWalletSelection}
    default-no-wallet-label={defaultNoWalletLabel}
    contract={contract}
    token-id={tokenId}
    theme={theme}
    rounded={rounded}
    force-dropdown={forceDropdown}
    on:buttonClick={event => dispatch("buttonClick", event.detail)}
    on:walletSelect={event => dispatch("walletSelect", event.detail)}
  />
{/if}