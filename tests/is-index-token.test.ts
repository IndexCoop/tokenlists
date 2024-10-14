import * as fc from 'fast-check';
import {
  indexTokenArbitrary,
  nonIndexTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isIndexToken } from '../src';

describe('isIndexToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isIndexToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens with the "index" tag', () => {
    fc.assert(
      fc.property(indexTokenArbitrary, (indexToken) => {
        expect(isIndexToken(indexToken)).toBe(true);
      }),
    );
  });

  it('should return false for tokens that do not have the "index" tag', () => {
    fc.assert(
      fc.property(nonIndexTokenArbitrary, (nonIndexToken) => {
        expect(isIndexToken(nonIndexToken)).toBe(false);
      }),
    );
  });

  // Test: isIndexToken should return false for unlisted tokens
  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isIndexToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
