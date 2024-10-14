import * as fc from 'fast-check';
import {
  nonIndexTokenArbitrary,
  nonProductIndexTokenArbitrary,
  productTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isProductToken } from '@/src/utils';

describe('isProductToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isProductToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens that are index tokens with but not INDEX', () => {
    fc.assert(
      fc.property(productTokenArbitrary, (productToken) => {
        expect(isProductToken(productToken)).toBe(true);
      }),
    );
  });

  it('should return false for index tokens that are non-product tokens a.k.a INDEX', () => {
    fc.assert(
      fc.property(nonProductIndexTokenArbitrary, (nonProductIndexToken) => {
        expect(isProductToken(nonProductIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not index tokens', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isProductToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isProductToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
