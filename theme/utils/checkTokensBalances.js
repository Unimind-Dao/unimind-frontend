import { ethers } from "ethers";

import ContractABI from "../contracts/abi.json";

export const checkTokenBalances = async (address) => {
  let error;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  if (!signer) {
    error = `Please login to your wallet.`;
  }
  const tokensContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    ContractABI,
    signer
  );

  if (!tokensContract) {
    error = `There was a problem with the Smart Contract.`;
  }

  const tokenIds = [1, 2];
  const addresses = tokenIds.map((_id) => address);
  const balances = await tokensContract.balanceOfBatch(addresses, tokenIds);

  const tokens = balances.map((item, index) => ({
    tokenId: tokenIds[index],
    balance: Number(item.toString()),
  }));

  return { tokens, error };
};
