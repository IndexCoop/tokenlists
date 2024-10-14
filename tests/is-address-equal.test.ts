import * as fc from 'fast-check';
import { isAddressEqual } from '../src';
import { ethAddressArbitrary } from './utils';

describe('isAddressEqual', () => {
  it('should accept any value but return false for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(isAddressEqual(anyVal, anyVal)).toBe(false);
      }),
    );
  });

  it('should return true for identical valid addresses, ignoring case', () => {
    fc.assert(
      fc.property(ethAddressArbitrary(), (address) => {
        const upperCaseAddress =
          address.slice(0, 2) + address.slice(2).toUpperCase();
        const lowerCaseAddress = address.toLowerCase();

        expect(isAddressEqual(upperCaseAddress, lowerCaseAddress)).toBe(true);
      }),
    );
  });

  it('should return false for different valid addresses', () => {
    fc.assert(
      fc.property(
        ethAddressArbitrary(),
        ethAddressArbitrary(),
        (addressA, addressB) => {
          fc.pre(addressA.toLowerCase() !== addressB.toLowerCase());
          expect(isAddressEqual(addressA, addressB)).toBe(false);
        },
      ),
    );
  });

  it('should return false for invalid or mixed addresses', () => {
    const invalidAddress = fc.oneof(
      fc.string({ minLength: 0, maxLength: 39 }),
      fc.string({ minLength: 41, maxLength: 100 }),
      fc
        .string({ minLength: 40, maxLength: 40 })
        .filter((s) => !/^[0-9a-fA-F]+$/.test(s)),
    );

    fc.assert(
      fc.property(invalidAddress, ethAddressArbitrary(), (invalid, valid) => {
        expect(isAddressEqual(invalid, valid)).toBe(false);
        expect(isAddressEqual(valid, invalid)).toBe(false);
        expect(isAddressEqual(invalid, invalid)).toBe(false);
      }),
    );
  });
});
