import {
  ArbitrumTokens,
  IndexCoopArbitrumTokens,
  IndexCoopMainnetTokens,
  MainnetTokens,
  TokenData,
} from '..';

function isSameAddress(address1: string, address2: string): boolean {
  return address1.toLowerCase() === address2.toLowerCase();
}

function getIndexTokenList(chainId: number) {
  let tokenlist: TokenData[] | null = null;
  switch (chainId) {
    case 1:
      tokenlist = IndexCoopMainnetTokens;
      break;
    case 42161:
      tokenlist = IndexCoopArbitrumTokens;
      break;
  }
  return tokenlist;
}

function getTokenList(chainId: number) {
  let tokenlist: TokenData[] | null = null;
  switch (chainId) {
    case 1:
      tokenlist = MainnetTokens;
      break;
    case 42161:
      tokenlist = ArbitrumTokens;
      break;
  }
  return tokenlist;
}

export function getIndexTokenData(
  symbol: string,
  chainId = 1
): TokenData | null {
  const tokenlist = getIndexTokenList(chainId);
  if (tokenlist === null) return null;
  const tokenData = tokenlist.find(
    token => token.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return tokenData ?? null;
}

export function getIndexTokenDataByAddress(
  address: string,
  chainId: number
): TokenData | null {
  const tokenlist = getIndexTokenList(chainId);
  if (tokenlist === null) return null;
  const tokenData = tokenlist.find(token =>
    isSameAddress(token.address, address)
  );
  return tokenData ?? null;
}

export function getTokenData(
  symbol: string,
  chainId: number
): TokenData | null {
  const tokenlist = getTokenList(chainId);
  if (tokenlist === null) return null;
  const tokenData = tokenlist.find(
    token => token.symbol.toLowerCase() === symbol.toLowerCase()
  );
  return tokenData ?? null;
}

export function getTokenDataByAddress(
  address: string,
  chainId: number
): TokenData | null {
  const tokenlist = getTokenList(chainId);
  if (tokenlist === null) return null;
  const tokenData = tokenlist.find(token =>
    isSameAddress(token.address, address)
  );
  return tokenData ?? null;
}
