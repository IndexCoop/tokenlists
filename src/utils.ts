import type { rpcUrls } from '@/config/networks';
import type { TokenInfo } from '@uniswap/token-lists';
import {
  checksumAddress,
  createPublicClient,
  http,
  isAddress,
  zeroAddress,
} from 'viem';
import setTokenABI from './SetToken.abi.json';
import tokenlist from './tokenlist.json';
import type {
  AddressByChain,
  ChainId,
  CollateralToken,
  ComponentToken,
  CurrencyToken,
  IndexToken,
  LeverageToken,
  ListedToken,
  ProductRevenueToken,
  ProductToken,
  SectorToken,
  SymbolsByChain,
  Tags,
  TokenAddressMap,
  TokenAddressMapByChain,
  TokensByChain,
  TokenSymbolMap,
  TokenSymbolMapByChain,
  U2I,
  UnderlyingToken,
  YieldToken,
} from './types';

/**
 * Compare two Ethereum addresses case-insensitively.
 * @param a - First address to compare.
 * @param b - Second address to compare.
 * @returns Returns true if both addresses are valid and equal, false otherwise.
 * @example
 * isAddressEqual('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', '0xA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48')
 * // Returns true.
 */
export const isAddressEqual = (a: unknown, b: unknown) =>
  typeof a === 'string' &&
  typeof b === 'string' &&
  isAddress(a, { strict: false }) &&
  isAddress(b, { strict: false }) &&
  a.toLowerCase() === b.toLowerCase();

/**
 * Validates if the given parameter adheres to the Uniswap's {@link TokenInfo} interface.
 * @param token - The value to test.
 * @returns Returns true if the parameter is a valid Uniswap standard {@link TokenInfo} object.
 */
export const isToken = (token: unknown): token is TokenInfo => {
  if (typeof token !== 'object' || !token) return false;
  if (!('chainId' in token) || typeof token.chainId !== 'number') return false;
  if (
    !('address' in token) ||
    typeof token.address !== 'string' ||
    !isAddress(token.address, { strict: false })
  )
    return false;
  if (!('name' in token) || typeof token.name !== 'string') return false;
  if (!('symbol' in token) || typeof token.symbol !== 'string') return false;
  if (!('decimals' in token) || typeof token.decimals !== 'number')
    return false;

  return true;
};

/**
 * Compares two tokens based on their chainId and address.
 * @param a - First token to compare.
 * @param b - Second token to compare.
 * @returns Returns true if the tokens are equal.
 * @example
 * isTokenEqual(tokenA, tokenB)
 * // Returns true if both tokens have the same chainId and address.
 */
export const isTokenEqual = (a: unknown, b: unknown) => {
  if (isToken(a) && isToken(b)) {
    return a.chainId === b.chainId && isAddressEqual(a.address, b.address);
  }

  return false;
};

/**
 * Checks if the provided parameter adheres to the {@link ListedToken} interface.
 * @param token - Value to validate.
 * @returns True if the token is listed.
 */
export const isListedToken = (token: unknown): token is ListedToken =>
  isToken(token) &&
  Boolean(
    token.chainId in tokenSymbolMap &&
      token.symbol in tokenSymbolMap[token.chainId as ChainId],
  );

/**
 * Validates if the given token is an {@link IndexToken}.
 * @param token - Token to validate.
 * @returns Returns true if the token is an IndexToken.
 */
export const isIndexToken = (token: unknown): token is IndexToken =>
  isListedToken(token) && token.tags.some((tag) => tag === 'index');

/**
 * Validates if the given token is a {@link LeverageToken}.
 * @param token - Token to check.
 * @returns True if the token is a LeverageToken.
 */
export const isLeverageToken = (token: unknown): token is LeverageToken =>
  isIndexToken(token) && 'leverage' in token.extensions;

/**
 * Checks if the token is a {@link SectorToken}.
 * @param token - Token to validate.
 * @returns Returns true if the token is a SectorToken.
 */
export const isSectorToken = (token: unknown): token is SectorToken =>
  isIndexToken(token) && 'sector' in token.extensions;

/**
 * Checks if the token is a {@link YieldToken}.
 * @param token - Token to check.
 * @returns True if the token is a YieldToken.
 */
export const isYieldToken = (token: unknown): token is YieldToken =>
  isIndexToken(token) && 'yield' in token.extensions;

export const isUnderlyingToken = (token: unknown): token is UnderlyingToken =>
  isListedToken(token) && token.tags.some((tag) => tag === 'underlying');

export const isCollateralToken = (token: unknown): token is CollateralToken =>
  isListedToken(token) && token.tags.some((tag) => tag === 'collateral');

/**
 * Checks if the token is a {@link ProductToken}.
 * @param token - Token to check.
 * @returns True if the token is a ProductToken  (leverage, yield or sector).
 */
export const isProductToken = (token: unknown): token is ProductToken => {
  return isSectorToken(token) || isLeverageToken(token) || isYieldToken(token);
};

/**
 * Checks if the token is a {@link CurrencyToken}.
 * @param token - Token to check.
 * @returns True if the token is a CurrencyToken.
 */
export const isCurrencyToken = (token: unknown): token is CurrencyToken => {
  return isListedToken(token) && token.tags.some((tag) => tag === 'currency');
};

/**
 * Checks if the token is a {@link ComponentToken}.
 * @param token - Token to check.
 * @returns True if the token is a ComponentToken.
 */
export const isComponentToken = (token: unknown): token is ComponentToken => {
  return isListedToken(token) && token.tags.some((tag) => tag === 'component');
};

/**
 * Checks if the token is a {@link ComponentToken}.
 * @param token - Token to check.
 * @returns True if the token is a ComponentToken.
 */
export const isProductRevenueToken = (
  token: unknown,
): token is ProductRevenueToken => {
  return isListedToken(token) && token.tags.some((tag) => tag === 'prt');
};

/**
 * Generates a nested map with {@link ChainId} as key and address as secondary key.
 * @example
 * tokenAddressMap[1]['0x6b175474e89094c44da98b954eedeac495271d0f']
 * // Returns DAI token on Ethereum.
 */
export const tokenAddressMap = tokenlist.tokens.reduce((acc, token) => {
  const { chainId, address } = token;

  if (!acc[chainId]) {
    acc[chainId] = {} as U2I<{ [C in ChainId]: TokenAddressMap<C> }[ChainId]>;
  }

  //@ts-ignore - Symbol type is too broad for this, thus typescript cannot infer, since chainId and address are not linked
  acc[chainId][address] = token;

  return acc;
}, {} as TokenAddressMapByChain);

/**
 * Retrieve a token by its chainId and address.
 * @param {C} chainId - the {@link ChainId} on which the token is expected to be found.
 * @param {A} address - the address of the token to look for
 * @returns {ListedToken | null} The token, or null if not found.
 * @example
 * getTokenByChainAndAddress(1, '0x54ee8a49155f701f0d5ff088cd36fbbf1a5b9f44'); // Returns USDC token on Ethereum.
 * const network: number = 5/5 // resolves to 1
 * getTokenByChainAndSymbol(network, '0x54ee8a49155f701f0d5ff088cd36fbbf1a5b9f44');
 * // Returns USDC token on Ethereum, but the type will be a union of all possible tokens with the same addres.
 */
export function getTokenByChainAndAddress<
  C extends ChainId,
  A extends AddressByChain<C>,
>(chainId: C, symbol: A): Extract<ListedToken, { chainId: C; address: A }>;

export function getTokenByChainAndAddress<C extends ChainId>(
  chainId: C,
  address: unknown,
): Extract<ListedToken, { chainId: C }> | null;

export function getTokenByChainAndAddress<A extends AddressByChain<ChainId>>(
  chainId: unknown,
  address: A,
): Extract<ListedToken, { address: A }> | null;

export function getTokenByChainAndAddress(
  chainId: unknown,
  address: unknown,
): ListedToken | null;

export function getTokenByChainAndAddress(
  chainId: unknown,
  address: unknown,
): ListedToken | null {
  if (
    typeof chainId === 'number' &&
    typeof address === 'string' &&
    chainId in tokenAddressMap &&
    isAddress(address, { strict: false })
  ) {
    const tokenMapByChain = tokenAddressMap[chainId as ChainId];

    const addr = checksumAddress(address);

    if (addr in tokenMapByChain) {
      return tokenMapByChain[
        addr as keyof typeof tokenMapByChain
      ] as ListedToken;
    }
  }

  return null;
}

/**
 * Retrieve a token by its chainId and address. Curried version of {@link getTokenByChainAndAddress}.
 * @param {C} chainId - the {@link ChainId} on which the token is expected to be found.
 * @param {A} address - the address of the token to look for
 * @returns {ListedToken | null} The token, or null if not found.
 * @example
 * getTokenByChainAndAddress(1, '0x54ee8a49155f701f0d5ff088cd36fbbf1a5b9f44'); // Returns USDC token on Ethereum.
 * const network: number = 5/5 // resolves to 1
 * getTokenByChainAndSymbol(network, '0x54ee8a49155f701f0d5ff088cd36fbbf1a5b9f44');
 * // Returns USDC token on Ethereum, but the type will be a union of all possible tokens with the same addres.
 */
export function getTokenByChainAndAddressCurried<C extends ChainId>(
  chainId: C,
): <A extends AddressByChain<C>>(
  address: A,
) => Extract<ListedToken, { chainId: C; address: A }>;

export function getTokenByChainAndAddressCurried<C extends ChainId>(
  chainId: C,
): (address: unknown) => Extract<ListedToken, { chainId: C }> | null;

export function getTokenByChainAndAddressCurried(
  chainId: unknown,
): <A extends AddressByChain<ChainId>>(
  address: A,
) => Extract<ListedToken, { address: A }> | null;

export function getTokenByChainAndAddressCurried(
  chainId: unknown,
): (address: unknown) => ListedToken | null;

// Implementation
export function getTokenByChainAndAddressCurried(chainId: unknown) {
  return <A extends AddressByChain<ChainId>>(address: A): ListedToken | null =>
    getTokenByChainAndAddress(chainId, address);
}

/**
 * Generates a nested map with {@link ChainId} as key and {@link SymbolsByChain} as secondary key.
 */
export const tokenSymbolMap = tokenlist.tokens.reduce((acc, token) => {
  const { chainId, symbol } = token;

  if (!acc[chainId]) {
    acc[chainId] = {} as U2I<{ [C in ChainId]: TokenSymbolMap<C> }[ChainId]>;
  }

  //@ts-ignore - Symbol type is too broad for this, thus typescript cannot infer, since chainId and symbol are not linked
  acc[chainId][symbol] = token;

  return acc;
}, {} as TokenSymbolMapByChain);

/**
 * Retrieve a token by its chainId and symbol.
 * @param {C} chainId - the {@link ChainId} on which the token is expected to be found.
 * @param {S} symbol - the symbol of the token to look for
 * @returns {ListedToken | null} The token, or null if not found.
 * @example
 * getTokenByChainAndSymbol(1, 'USDC'); // Returns USDC token on Ethereum.
 *
 * const network: number = 5/5 // resolves to 1
 * getTokenByChainAndSymbol(network, 'USDC');
 * // Returns USDT token on Ethereum, but the type will be a union of all possible USDC tokens.
 */
export function getTokenByChainAndSymbol<
  C extends ChainId,
  S extends SymbolsByChain<C>,
>(chainId: C, symbol: S): Extract<ListedToken, { chainId: C; symbol: S }>;

export function getTokenByChainAndSymbol<C extends ChainId>(
  chainId: C,
  symbol: unknown,
): Extract<ListedToken, { chainId: C }> | null;

export function getTokenByChainAndSymbol<S extends SymbolsByChain<ChainId>>(
  chainId: unknown,
  symbol: S,
): Extract<ListedToken, { symbol: S }> | null;

export function getTokenByChainAndSymbol(
  chainId: unknown,
  symbol: unknown,
): ListedToken | null;

export function getTokenByChainAndSymbol(chainId: unknown, symbol: unknown) {
  if (
    typeof chainId === 'number' &&
    typeof symbol === 'string' &&
    chainId in tokenSymbolMap
  ) {
    const tokenMapByChain = tokenSymbolMap[chainId as ChainId];

    if (symbol in tokenMapByChain) {
      return tokenMapByChain[
        symbol as keyof typeof tokenMapByChain
      ] as ListedToken;
    }
  }

  return null;
}

/**
 * Retriveve a token by its chainId and symbol. Curried version of {@link getTokenByChainAndSymbol}
 * @param {C} chainId - the {@link ChainId} on which the token is expected to be found.
 * @param {S} symbol - the symbol of the token to look for
 * @returns {ListedToken | null} The token, or null if not found.
 * @example
 * getTokenByChainAndSymbol(1)('USDC'); // Returns USDC token on Ethereum.
 *
 * const network: number = 5/5 // resolves to 1
 * getTokenByChainAndSymbol(network)('USDC');
 * // Returns USDT token on Ethereum, but the type will be a union of all possible USDC tokens.
 */
export function getTokenByChainAndSymbolCurried<C extends ChainId>(
  chainId: C,
): <S extends SymbolsByChain<C>>(
  symbol: S,
) => Extract<ListedToken, { chainId: C; symbol: S }>;

export function getTokenByChainAndSymbolCurried<C extends ChainId>(
  chainId: C,
): (symbol: string) => Extract<ListedToken, { chainId: C }> | null;

export function getTokenByChainAndSymbolCurried(
  chainId: unknown,
): <S extends SymbolsByChain<ChainId>>(
  symbol: S,
) => Extract<ListedToken, { symbol: S }> | null;

export function getTokenByChainAndSymbolCurried(
  chainId: unknown,
): (symbol: unknown) => ListedToken | null;

export function getTokenByChainAndSymbolCurried(chainId: unknown) {
  return <S extends SymbolsByChain<ChainId>>(symbol: S): ListedToken | null =>
    getTokenByChainAndSymbol(chainId, symbol);
}

/**
 * Fetches the list of all tokens for a specific chain.
 * @param chainId - The {@link ChainId} to filter tokens.
 * @param [tags] - Optional {@link Tags}[] to filter tokens by tags.
 * @returns - {@link ListedToken}[]
 * @example
 * getChainTokenList(1)
 * // Returns all tokens for Ethereum chain.
 * getChainTokenList(1, ['currency'])
 * // Returns all currency tokens for Ethereum chain.
 */
export function getChainTokenList<C extends ChainId>(
  chainId: C,
  tags?: Tags[],
): TokensByChain<ListedToken, C>[];

export function getChainTokenList(
  chainId: unknown,
  tags?: Tags[],
): ListedToken[];

export function getChainTokenList(
  chainId: unknown,
  tags: Tags[] = [],
): ListedToken[] {
  if (typeof chainId === 'number' && chainId in tokenSymbolMap) {
    return tokenlist.tokens.filter(
      (t) =>
        t.chainId === chainId &&
        (tags.length === 0 || t.tags.some((tag) => tags.includes(tag))),
    ) as ListedToken[];
  }
  return [];
}

/**
 * Returns the list of all product tokens for a specific chain.
 * @param chainId - The {@link ChainId} to filter tokens.
 * @returns - {@link ProductToken}[]
 * @example
 * getChainProductTokenList(1)
 * // Returns all product tokens for Ethereum chain.
 */
export function getChainProductTokenList<C extends ChainId>(
  chainId: C,
): TokensByChain<ProductToken, C>[];

export function getChainProductTokenList(chainId: unknown): ProductToken[];
export function getChainProductTokenList(chainId: unknown): ProductToken[] {
  if (typeof chainId === 'number' && chainId in tokenSymbolMap) {
    return tokenlist.tokens.filter(
      (t) => t.chainId === chainId && isProductToken(t),
    ) as ProductToken[];
  }
  return [];
}

/**
 * Returns the list of all currency tokens for a specific chain.
 * @param chainId - The {@link ChainId} to filter tokens.
 * @returns - {@link CurrencyToken}[]
 * @example
 * getChainCurrencyTokenList(1)
 * // Returns all currency tokens for Ethereum chain.
 */
export function getChainCurrencyTokenList<C extends ChainId>(
  chainId: C,
): TokensByChain<CurrencyToken, C>[];

export function getChainCurrencyTokenList(chainId: unknown): CurrencyToken[];
export function getChainCurrencyTokenList(chainId: unknown): CurrencyToken[] {
  if (typeof chainId === 'number' && chainId in tokenSymbolMap) {
    return tokenlist.tokens.filter(
      (t) => t.chainId === chainId && isCurrencyToken(t),
    ) as CurrencyToken[];
  }
  return [];
}

/**
 * Returns the list of all component tokens for a specific chain.
 * @param chainId - The {@link ChainId} to filter tokens.
 * @returns - {@link ComponentToken}[]
 * @example
 * getChainComponentTokenList(1)
 * // Returns all component tokens for Ethereum chain.
 */
export function getChainComponentTokenList<C extends ChainId>(
  chainId: C,
): TokensByChain<ComponentToken, C>[];

export function getChainComponentTokenList(chainId: unknown): ComponentToken[];
export function getChainComponentTokenList(chainId: unknown): ComponentToken[] {
  if (typeof chainId === 'number' && chainId in tokenSymbolMap) {
    return tokenlist.tokens.filter(
      (t) => t.chainId === chainId && isComponentToken(t),
    ) as ComponentToken[];
  }
  return [];
}

/**
 * @param rpcConfig Record of rpc urls by chainId
 * @param token A token object
 * @returns A Promise of a list containing {@link ComponentToken} objects
 * @example
 * const components = await getComponentsOf(rpcConfig, token)
 */
/* istanbul ignore next */
export async function getComponentsOf(
  rpcConfig: typeof rpcUrls,
  token: unknown,
): Promise<ComponentToken[]> {
  if (isListedToken(token)) {
    const publicClient = createPublicClient({
      transport: http(rpcConfig[token.chainId]),
    });

    let componentAddressList = [] as readonly `0x${string}`[];
    let componentTokens = [] as ComponentToken[];

    try {
      componentAddressList = await publicClient.readContract({
        address: token.address,
        abi: setTokenABI,
        functionName: 'getComponents',
      });
      componentTokens = componentAddressList.map((address) =>
        getTokenByChainAndAddress(token.chainId, address),
      ) as ComponentToken[];
    } catch {}

    if (componentTokens.length === 0) {
      const mainnetToken =
        token.chainId === 1 ? token : getTokenByChainAndSymbol(1, token.symbol);

      if (!mainnetToken) return [];

      const publicClient = createPublicClient({
        transport: http(rpcConfig[mainnetToken.chainId]),
      });

      componentAddressList = await publicClient.readContract({
        address: mainnetToken?.address ?? zeroAddress,
        abi: setTokenABI,
        functionName: 'getComponents',
      });

      const componentTokensBridged = componentAddressList.map((address) =>
        getTokenByChainAndAddress(1, address),
      ) as ComponentToken[];

      return componentTokensBridged;
    }

    return componentTokens;
  }

  return [];
}

/**
 * Retrieves the underlying token for a leverage token.
 * @param token - A leverage token
 * @returns The underlying token, or null if not found or if the input is not a leverage token
 * @example
 * getUnderlyingToken(eth2xToken); // Returns WETH token
 */
export function getUnderlyingToken<T extends LeverageToken>(
  token: T,
): Extract<
  ListedToken,
  {
    chainId: T['chainId'];
    address: T['extensions']['leverage']['underlyingAddress'];
  }
>;

export function getUnderlyingToken(token: LeverageToken): ListedToken | null;
export function getUnderlyingToken(token: unknown): ListedToken | null;
export function getUnderlyingToken(token: unknown): ListedToken | null {
  if (isLeverageToken(token)) {
    const { underlyingAddress } = token.extensions.leverage;

    const underlyingToken = getTokenByChainAndAddress(
      token.chainId,
      underlyingAddress,
    );

    return underlyingToken ?? getTokenByChainAndAddress(1, underlyingAddress);
  }

  return null;
}

/**
 * Retrieves the collateral token for a leverage token.
 * @param token - A leverage token
 * @returns The collateral token, or null if not found or if the input is not a leverage token
 * @example
 * getCollateralToken(eth2xToken); // Returns USDC token
 */
export function getCollateralToken<T extends LeverageToken>(
  token: T,
): Extract<
  ListedToken,
  {
    chainId: T['chainId'];
    address: T['extensions']['leverage']['collateralAddress'];
  }
>;

export function getCollateralToken(token: LeverageToken): ListedToken | null;
export function getCollateralToken(token: unknown): ListedToken | null;
export function getCollateralToken(token: unknown): ListedToken | null {
  if (isLeverageToken(token)) {
    const { collateralAddress } = token.extensions.leverage;

    const collateralToken = getTokenByChainAndAddress(
      token.chainId,
      collateralAddress,
    );

    return collateralToken ?? getTokenByChainAndAddress(1, collateralAddress);
  }

  return null;
}
