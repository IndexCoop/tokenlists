import * as fc from 'fast-check';
import {
  leverageTokenArbitrary,
  nonIndexTokenArbitrary,
  nonLeverageIndexTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isLeverageToken } from '../src';

describe('isLeverageToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isLeverageToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens that are index tokens with leverage in extensions', () => {
    fc.assert(
      fc.property(leverageTokenArbitrary, (leverageToken) => {
        expect(isLeverageToken(leverageToken)).toBe(true);
      }),
    );
  });

  it('should return false for index tokens that do not have leverage in extensions', () => {
    fc.assert(
      fc.property(nonLeverageIndexTokenArbitrary, (nonLeverageToken) => {
        expect(isLeverageToken(nonLeverageToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not index tokens', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isLeverageToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isLeverageToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
