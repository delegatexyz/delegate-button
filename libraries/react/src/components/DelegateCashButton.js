import React, { useRef, useEffect } from 'react';
import "delegatecash-button";

const DelegateCashButton = (props) => {
  
  const ref = useRef(null);
  const { 
    label, 
    connectedWallet, 
    rpcUrl, 
    defaultWalletSelection, 
    defaultNoWalletLabel,
    disabled,
    contract, 
    tokenId, 
    theme, 
    rounded, 
    forceDropdown, 
    onButtonClick = () => {},
    onWalletSelect = () => {}
  } = props;

  useEffect(() => {
    if(!ref) return;
    
    const handleButtonClick = event => onButtonClick(event);
    const handleWalletSelect = event => onWalletSelect(event);

    const element = ref.current;
    element.addEventListener('buttonClick', handleButtonClick);
    element.addEventListener('walletSelect', handleWalletSelect);
    return () => {
      element.removeEventListener('buttonClick', handleButtonClick);
      element.removeEventListener('walletSelect', handleWalletSelect);
    };
  });
  
  return(
    <delegate-cash-button 
      ref={ref}
      label={label}
      disabled={disabled}
      connected-wallet={connectedWallet}
      rpc-url={rpcUrl} 
      default-wallet-selection={defaultWalletSelection}
      default-no-wallet-label={defaultNoWalletLabel}
      contract={contract}
      token-id={tokenId}
      theme={theme}
      rounded={rounded}
      force-dropdown={forceDropdown}
    />
  );
};

export default DelegateCashButton;