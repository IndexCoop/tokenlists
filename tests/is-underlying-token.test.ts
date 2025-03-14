import * as fc from 'fast-check';
import {
  underlyingTokenArbitrary,
  nonUnderlyingTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { isUnderlyingToken } from '../src';

describe('isUnderlyingToken', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isUnderlyingToken(anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for tokens with the "underlying" tag', () => {
    fc.assert(
      fc.property(underlyingTokenArbitrary, (underlyingToken) => {
        expect(isUnderlyingToken(underlyingToken)).toBe(true);
      }),
    );
  });

  it('should return false for tokens that do not have the "underlying" tag', () => {
    fc.assert(
      fc.property(nonUnderlyingTokenArbitrary, (nonUnderlyingToken) => {
        expect(isUnderlyingToken(nonUnderlyingToken)).toBe(false);
      }),
    );
  });

  it('should return false for tokens that are not listed', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(isUnderlyingToken(unlistedToken)).toBe(false);
      }),
    );
  });
});
