import * as fc from 'fast-check';
import { invalidTokenArbitrary, validTokenArbitrary } from './utils';
import { isToken } from '../src';

describe('isToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for valid TokenInfo objects', () => {
    fc.assert(
      fc.property(validTokenArbitrary, (token) => {
        expect(isToken(token)).toBe(true); // Valid tokens should return true
      }),
    );
  });

  it('should return false for invalid TokenInfo objects', () => {
    fc.assert(
      fc.property(invalidTokenArbitrary, (invalidToken) => {
        expect(isToken(invalidToken)).toBe(false); // Invalid tokens should return false
      }),
    );
  });
});
