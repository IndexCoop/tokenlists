import {IndexCoopMainnetTokens, TokenData} from '..';

export function getIndexTokenData(
  symbol: string,
  chainId = 1
): TokenData | null {
  if (chainId !== 1) return null;
  const tokenData = IndexCoopMainnetTokens.filter(
    token => token.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return tokenData[0] ?? null;
}
