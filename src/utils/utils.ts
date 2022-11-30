import { ethers } from 'ethers';

export const truncateWallet = (wallet, left = 5, right = 5) => {
  wallet = String(wallet);
  if (wallet.length <= 15) return wallet;
  return wallet.substr(0, left) + '...' + wallet.substr(wallet.length - right);
};

export const getDelegations = async (selectedWallet, rpcUrl, contract = null, tokenId = null) => {
  try {
    const body = {
      jsonrpc: '2.0',
      id: 3,
      method: 'eth_call',
      params: [
        {
          from: '0x0000000000000000000000000000000000000000',
          to: '0x00000000000076a84fef008cdabe6409d2fe638b',
          data: `0x4fc69282000000000000000000000000${selectedWallet.replace(
            '0x',
            '',
          )}`.toLowerCase(),
        },
        'latest',
      ],
    };

    const fetchDelegates = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const delegateData = await fetchDelegates.json();
    const decoded = ethers.utils.defaultAbiCoder.decode(
      [
        {
          components: [
            // @ts-ignore
            { type: 'uint8' },
            // @ts-ignore
            { name: 'vault', type: 'address' },
            // @ts-ignore
            { name: 'delegate', type: 'address' },
            // @ts-ignore
            { name: 'contract', type: 'address' },
            // @ts-ignore
            { name: 'tokenId', type: 'uint256' },
          ],
          type: 'tuple[]',
        },
      ],
      delegateData.result,
    );

    return filterDelegations(decoded[0] || [], contract, tokenId);
  } catch (err) {
    return [];
  }
};

const filterDelegations = (items, contract, tokenId) => {
  return items
    .filter(item => {
      if (item[0] === 1) return true;
      if (item[0] === 2 && item['contract'] === contract?.toLowerCase()) return true;
      if (
        item[0] === 3 &&
        item['contract'] === contract?.toLowerCase() &&
        parseInt(item['tokenId'], 16) === tokenId
      )
        return true;
      return false;
    })
    .map(item => item['vault'].toLowerCase());
};
