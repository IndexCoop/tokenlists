import * as fc from 'fast-check';
import {
  collateralTokenArbitrary,
  nonCollateralTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isCollateralToken } from '../src';

describe('isCollateralToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isCollateralToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens with the "collateral" tag', () => {
    // If there are no collateral tokens in your tokenlist, you may need to skip this test
    // or create a mock token for testing
    fc.assert(
      fc.property(collateralTokenArbitrary, (collateralToken) => {
        expect(isCollateralToken(collateralToken)).toBe(true);
      }),
    );
  });

  it('should return false for tokens that do not have the "collateral" tag', () => {
    fc.assert(
      fc.property(nonCollateralTokenArbitrary, (nonCollateralToken) => {
        expect(isCollateralToken(nonCollateralToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isCollateralToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
