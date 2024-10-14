import * as fc from 'fast-check';
import { listedTokenArbitrary, unlistedTokenArbitrary } from './utils';
import { getTokenByChainAndSymbol } from '../src';

describe('getTokenByChainAndSymbol', () => {
  it('should return accept anything as chainId and symbol, but return null', () => {
    fc.assert(
      fc.property(fc.anything(), fc.anything(), (anyVal, anyOtherVal) => {
        const result = getTokenByChainAndSymbol(anyOtherVal, anyOtherVal);
        expect(result).toEqual(null);
      }),
    );
  });
  it('should return the correct token for valid chainId and symbol', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        const { chainId, symbol } = listedToken;
        const result = getTokenByChainAndSymbol(chainId, symbol);
        expect(result).toEqual(listedToken);
      }),
    );
  });

  it('should return null for non-existent chainId or symbol', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, ({ chainId, symbol }) => {
        const result = getTokenByChainAndSymbol(chainId, symbol);
        expect(result).toBeNull();
      }),
    );
  });
});
