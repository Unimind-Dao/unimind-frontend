import { checkTokenBalances } from "./checkTokensBalances";

export const isMember = async (userAddress) => {
  const { tokens } = await checkTokenBalances(userAddress);

  const balance = tokens.find(token => token.tokenId === 2)

  let isMember;
  isMember = balance.balance >= 1;

  return isMember;
};