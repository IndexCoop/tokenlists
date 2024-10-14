import * as fc from 'fast-check';
import {
  indexTokenArbitrary,
  productRevenueTokenArbitrary,
  nonProductRevenueTokenArbitrary,
  unlistedTokenArbitrary,
  nonIndexTokenArbitrary,
} from './utils';
import { isProductRevenueToken } from '@/src/utils';

describe('isProductRevenueToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isProductRevenueToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens that have the `prt` tag', () => {
    fc.assert(
      fc.property(productRevenueTokenArbitrary, (productRevenueToken) => {
        expect(isProductRevenueToken(productRevenueToken)).toBe(true);
      }),
    );
  });

  it('should return false for index tokens that are non-product revenue tokens', () => {
    fc.assert(
      fc.property(
        indexTokenArbitrary.filter(({ tags }) =>
          tags.every((t) => t !== 'prt'),
        ),
        (nonProductIndexToken) => {
          expect(isProductRevenueToken(nonProductIndexToken)).toBe(false);
        },
      ),
    );
  });

  it('should return false for all tokens that are non-product revenue tokens', () => {
    fc.assert(
      fc.property(nonProductRevenueTokenArbitrary, (nonProductRevenueToken) => {
        expect(isProductRevenueToken(nonProductRevenueToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not index tokens', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isProductRevenueToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isProductRevenueToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
