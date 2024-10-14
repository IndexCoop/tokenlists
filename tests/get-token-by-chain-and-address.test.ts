import * as fc from 'fast-check';
import { listedTokenArbitrary, unlistedTokenArbitrary } from './utils';
import { getTokenByChainAndAddress } from '../src';

describe('getTokenByChainAndAddress', () => {
  it('should return accept anything as chainId and address, but return null', () => {
    fc.assert(
      fc.property(fc.anything(), fc.anything(), (anyVal, anyOtherVal) => {
        const result = getTokenByChainAndAddress(anyOtherVal, anyOtherVal);
        expect(result).toEqual(null);
      }),
    );
  });

  it('should return the correct token for valid chainId and address', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        const { chainId, address } = listedToken;
        const result = getTokenByChainAndAddress(chainId, address);
        expect(result).toEqual(listedToken);
      }),
    );
  });

  it('should return the correct token regardless of address case', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        const { chainId, address } = listedToken;
        const upperCaseAddress =
          address.slice(0, 2) + address.slice(2).toUpperCase();
        const result = getTokenByChainAndAddress(chainId, upperCaseAddress);
        expect(result).toEqual(listedToken);
      }),
    );
  });

  it('should return null for non-existent chainId or address', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, ({ chainId, address }) => {
        const result = getTokenByChainAndAddress(chainId, address);
        expect(result).toBeNull();
      }),
    );
  });
});
