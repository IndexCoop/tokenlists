import * as fc from 'fast-check';
import { isTokenEqual, isToken } from '../src';
import { differentTokenArbitrary, validTokenArbitrary } from './utils';

describe('isTokenEqual', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isTokenEqual(anyVal, anyVal)).toBe(false);
      }),
    );
  });
  it('should return true for tokens with the same chainId and address (case-insensitive)', () => {
    fc.assert(
      fc.property(validTokenArbitrary, (token) => {
        const tokenUpperCase = {
          ...token,
          address:
            token.address.slice(0, 2) + token.address.slice(2).toUpperCase(),
        };

        expect(isTokenEqual(token, tokenUpperCase)).toBe(true);
      }),
    );
  });

  it('should return false for tokens with different chainId or address', () => {
    fc.assert(
      fc.property(differentTokenArbitrary, ([tokenA, tokenB]) => {
        expect(isTokenEqual(tokenA, tokenB)).toBe(false);
      }),
    );
  });
});
