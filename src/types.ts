import type InternalTokenList from './tokenlist.json';

// ------ Internal Types ------

export type U2I<U> = (U extends unknown ? (arg: U) => void : never) extends (
  arg: infer I,
) => void
  ? I
  : never;

type GetExt<T, K extends 'leverage' | 'sector' | 'yield'> = T extends {
  extensions: { [key in K]: infer L };
}
  ? L
  : never;

type TokenCat<T, K extends 'leverage' | 'sector' | 'yield'> = T extends {
  extensions: { [key in K]: infer S };
}
  ? T
  : never;

type Leverage = GetExt<ListedToken, 'leverage'>;
type Sector = GetExt<ListedToken, 'sector'>;
type Yield = GetExt<ListedToken, 'yield'>;

// ------ Internal Types ------

/**
 * {@link Tags} - A union of strings that represent all possible token tags
 */
export type Tags = keyof typeof InternalTokenList.tags;
/**
 * {@link ListedToken} - A union of all tokens in the tokenlist
 */
export type ListedToken = (typeof InternalTokenList.tokens)[number];

/**
 * {@link Status} - A union of all possible status extensions in the tokenlist
 **/
export type Status = ListedToken['extensions'] extends { status: infer S }
  ? S
  : never;

/**
 * {@link ChainId} - A union of all possible chainIds in the tokenlist
 */
export type ChainId = ListedToken['chainId'];
/**
 * {@link Symbol_} - A union of all possible symbols in the tokenlist
 */
export type Symbol_ = ListedToken['symbol'];

/**
 * {@link AddressByChain}<{@link ChainId}> - A union of all addresses in the tokenlist for a given chainId
 */
export type AddressByChain<C extends ChainId> = Extract<
  ListedToken,
  { chainId: C }
>['address'];

/**
 * {@link SymbolsByChain}<{@link ChainId}> - A union of all symbols in the tokenlist for a given chainId
 */
export type SymbolsByChain<C extends ChainId> = Extract<
  ListedToken,
  { chainId: C }
>['symbol'];

/**
 * {@link Extensions} - A union of all possible extensions in the tokenlist
 */
export type Extensions = ListedToken['extensions'];

/**
 * {@link LeverageType} - A union of all possible leverage types in the tokenlist
 */
export type LeverageType = Leverage['type'];

/**
 * {@link SectorTheme} - A union of all possible sector themes in the tokenlist
 */
export type SectorTheme = Sector['theme'];

/**
 * {@link YieldTheme} - A union of all possible yield themes in the tokenlist
 */
export type YieldTheme = Yield['theme'];

/**
 * {@link IndexTokenList} - The complete tokenlist type
 */
export type IndexTokenList = typeof InternalTokenList;

/**
 * {@link IndexCoopToken} - The token with the symbol 'INDEX'
 */
export type IndexCoopToken = Extract<ListedToken, { symbol: 'INDEX' }>;
/**
 * {@link LeverageToken} - All tokens have this type, if their extensions contain the key 'leverage'
 */
export type LeverageToken = TokenCat<ListedToken, 'leverage'>;
/**
 * {@link SectorToken} - All tokens have this type, if their extensions contain the key 'sector'
 */
export type SectorToken = TokenCat<ListedToken, 'sector'>;
/**
 * {@link YieldToken} - All tokens have this type, if their extensions contain the key 'yield'
 */
export type YieldToken = TokenCat<ListedToken, 'yield'>;

/**
 * {@link ProductToken} - A union of all tokens that are Index Coop product tokens
 * @note this includes all product tokens
 */
export type ProductToken = SectorToken | LeverageToken | YieldToken;

/**
 * {@link IndexToken} - A union of all tokens that are Index Coop tokens
 * @note this includes all product tokens, and the Index Coop token.
 */
export type IndexToken = IndexCoopToken | ProductToken;

/**
 * {@link CurrencyToken} - A union of all tokens that are currency tokens
 */
export type CurrencyToken = Extract<
  ListedToken,
  { tags: readonly ['currency', ...Tags[]] }
>;

/**
 * {@link ComponentToken} - A union of all tokens that are currency tokens
 */
export type ComponentToken = Extract<
  ListedToken,
  { tags: readonly ['component', ...Tags[]] }
>;
/**
 * {@link ComponentToken} - A union of all tokens that are currency tokens
 */
export type ProductRevenueToken = Extract<
  ListedToken,
  { tags: readonly ['prt', ...Tags[]] }
>;
/**
 * {@link TokensByChain}<{@link ChainId}> - A union of all tokens in the tokenlist for a given chainId
 */
export type TokensByChain<T, Id extends ChainId> = T extends { chainId: Id }
  ? T
  : never;

/**
 * {@link TokenSymbolMap}<{@link ChainId}> - A map of all tokens in the tokenlist for a given chainId by symbol
 */
export type TokenSymbolMap<C extends ChainId> = {
  [S in Extract<ListedToken, { chainId: C }>['symbol']]: Extract<
    ListedToken,
    { chainId: C; symbol: S }
  >;
};

/**
 * {@link TokenAddressMap}<{@link ChainId}> - A map of all tokens in the tokenlist for a given chainId by address
 */
export type TokenAddressMap<C extends ChainId> = {
  [A in Extract<ListedToken, { chainId: C }>['address']]: Extract<
    ListedToken,
    { chainId: C; address: A }
  >;
};

/**
 * {@link TokenSymbolMapByChain} - A nested map of all possible chains, with a map of all tokens in the tokenlist for a given chainId by symbol
 */
export type TokenSymbolMapByChain = {
  [K in ListedToken['chainId']]: TokenSymbolMap<K>;
};

/**
 * {@link TokenAddressMapByChain} - A nested map of all possible chains, with a map of all tokens in the tokenlist for a given chainId by address
 */
export type TokenAddressMapByChain = {
  [K in ListedToken['chainId']]: TokenAddressMap<K>;
};
