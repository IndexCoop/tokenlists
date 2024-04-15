import {IndexCoopArbitrumTokens, IndexCoopMainnetTokens, TokenData} from '..';

export function getIndexTokenData(
  symbol: string,
  chainId = 1
): TokenData | null {
  let tokenlist: TokenData[] | null = null;
  switch (chainId) {
    case 1:
      tokenlist = IndexCoopMainnetTokens;
      break;
    case 42161:
      tokenlist = IndexCoopArbitrumTokens;
      break;
  }
  if (tokenlist === null) return null;
  const tokenData = tokenlist.filter(
    token => token.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return tokenData[0] ?? null;
}
