<script>
  import DelegateCashButton from "./DelegateCashButton.svelte";

  $: label = "Mint";
  $: connectedWallet = "0x0000000000000000000000000000000000000001";
  $: rpcUrl = "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

  $: forceDropdown = false;
</script>

<DelegateCashButton 
  label={label} 
  connectedWallet={connectedWallet}
  rpcUrl={rpcUrl}
  rounded={true}
  forceDropdown={forceDropdown}
  on:buttonClick={(e) => console.log(e)}
  on:walletSelect={(e) => console.log(e)}
/>