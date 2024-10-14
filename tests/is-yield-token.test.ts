import * as fc from 'fast-check';
import {
  nonIndexTokenArbitrary,
  nonYieldIndexTokenArbitrary,
  unlistedTokenArbitrary,
  yieldTokenArbitrary,
} from './utils';
import { isYieldToken } from '../src';

describe('isYieldToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isYieldToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens that are index tokens with yield in extensions', () => {
    fc.assert(
      fc.property(yieldTokenArbitrary, (yieldToken) => {
        expect(isYieldToken(yieldToken)).toBe(true);
      }),
    );
  });

  it('should return false for index tokens that do not have yield in extensions', () => {
    fc.assert(
      fc.property(nonYieldIndexTokenArbitrary, (nonYieldToken) => {
        expect(isYieldToken(nonYieldToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not index tokens', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isYieldToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isYieldToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
