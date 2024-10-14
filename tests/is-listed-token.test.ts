import { isListedToken } from '../src';
import * as fc from 'fast-check';
import { listedTokenArbitrary, unlistedTokenArbitrary } from './utils';

describe('isListedToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isListedToken(anyVal)).toBe(false);
      }),
    );
  });
  it('should return true for listed tokens', () => {
    fc.assert(
      fc.property(listedTokenArbitrary, (listedToken) => {
        expect(isListedToken(listedToken)).toBe(true); // Should return true for listed tokens
      }),
    );
  });

  it('should return false for unlisted tokens', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isListedToken(unlistedToken)).toBe(false); // Should return false for unlisted tokens
      }),
    );
  });
});
