import * as fc from 'fast-check';
import {
  listedTokenArbitrary,
  symbolArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { getTokenByChainAndSymbolCurried } from '../src';

describe('getTokenByChainAndSymbol', () => {
  it('should return accept anything as chainId and a valid symbol, but return null', () => {
    fc.assert(
      fc.property(fc.anything(), symbolArbitrary, (anyVal, symbol) => {
        const result = getTokenByChainAndSymbolCurried(anyVal)(symbol);
        expect(result).toEqual(null);
      }),
    );
  });
  it('should return the correct token for valid chainId and symbol', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        const { chainId, symbol } = listedToken;
        const result = getTokenByChainAndSymbolCurried(chainId)(symbol);
        expect(result).toEqual(listedToken);
      }),
    );
  });

  it('should return null for non-existent chainId or symbol', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, ({ chainId, symbol }) => {
        // @ts-ignore
        const result = getTokenByChainAndSymbolCurried(chainId)(symbol);
        expect(result).toBeNull();
      }),
    );
  });
});
