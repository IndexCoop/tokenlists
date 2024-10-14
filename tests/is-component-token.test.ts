import * as fc from 'fast-check';
import {
  componentTokenArbitrary,
  nonComponentTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isComponentToken } from '../src';

describe('isComponentToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isComponentToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens with the "component" tag', () => {
    fc.assert(
      fc.property(componentTokenArbitrary, (currencyToken) => {
        expect(isComponentToken(currencyToken)).toBe(true);
      }),
    );
  });

  it('should return false for tokens that do not have the "component" tag', () => {
    fc.assert(
      fc.property(nonComponentTokenArbitrary, (nonCurrencyToken) => {
        expect(isComponentToken(nonCurrencyToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isComponentToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
