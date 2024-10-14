import * as fc from 'fast-check';
import {
  addressArbitrary,
  listedTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { getTokenByChainAndAddressCurried } from '../src';

describe('getTokenByChainAndAddress', () => {
  it('should return accept anything as chainId, but return null', () => {
    fc.assert(
      fc.property(fc.anything(), addressArbitrary, (anyVal, address) => {
        const result = getTokenByChainAndAddressCurried(anyVal)(address);
        expect(result).toEqual(null);
      }),
    );
  });

  it('should return the correct token for valid chainId and address', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        const { chainId, address } = listedToken;
        const result = getTokenByChainAndAddressCurried(chainId)(address);
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

        const result =
          // @ts-ignore
          getTokenByChainAndAddressCurried(chainId)(upperCaseAddress);

        expect(result).toEqual(listedToken);
      }),
    );
  });

  it('should return null for non-existent chainId or address', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, ({ chainId, address }) => {
        // @ts-ignore
        const result = getTokenByChainAndAddressCurried(chainId)(address);
        expect(result).toBeNull();
      }),
    );
  });
});
