import * as fc from 'fast-check';
import {
  currencyTokenArbitrary,
  nonCurrencyTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isCurrencyToken } from '../src';

describe('isCurrencyToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isCurrencyToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens with the "currency" tag', () => {
    fc.assert(
      fc.property(currencyTokenArbitrary, (currencyToken) => {
        expect(isCurrencyToken(currencyToken)).toBe(true);
      }),
    );
  });

  it('should return false for tokens that do not have the "currency" tag', () => {
    fc.assert(
      fc.property(nonCurrencyTokenArbitrary, (nonCurrencyToken) => {
        expect(isCurrencyToken(nonCurrencyToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isCurrencyToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
