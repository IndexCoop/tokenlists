import * as fc from 'fast-check';
import {
  nonIndexTokenArbitrary,
  nonSectorIndexTokenArbitrary,
  sectorTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isSectorToken } from '../src';

describe('isSectorToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isSectorToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens that are index tokens with sector in extensions', () => {
    fc.assert(
      fc.property(sectorTokenArbitrary, (sectorToken) => {
        expect(isSectorToken(sectorToken)).toBe(true);
      }),
    );
  });

  it('should return false for index tokens that do not have sector in extensions', () => {
    fc.assert(
      fc.property(nonSectorIndexTokenArbitrary, (nonSectorToken) => {
        expect(isSectorToken(nonSectorToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not index tokens', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isSectorToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isSectorToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
