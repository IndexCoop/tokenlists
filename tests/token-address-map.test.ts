import tokenlist from '../src/tokenlist.json';
import { tokenAddressMap } from '../src';

describe('tokenAddressMap', () => {
  it('should generate a map with chainId as the top-level key and address as the secondary key', () => {
    const generatedMap = tokenAddressMap;

    for (const token of tokenlist.tokens) {
      expect(generatedMap[token.chainId]).toBeDefined();
      // @ts-ignore
      expect(generatedMap[token.chainId][token.address]).toBeDefined();
    }
  });

  it('should map each address to its corresponding token', () => {
    const generatedMap = tokenAddressMap;

    for (const token of tokenlist.tokens) {
      // @ts-ignore
      const mappedToken = generatedMap[token.chainId][token.address];
      expect(mappedToken).toEqual(token);
    }
  });

  it('should handle edge cases with missing or invalid values', () => {
    const generatedMap = tokenAddressMap;

    // Ensure that chainId and address are properly handled
    for (const token of tokenlist.tokens) {
      if (!token.chainId || !token.address) {
        // @ts-ignore
        expect(generatedMap[token.chainId]).toBeUndefined();

        // @ts-ignore
        expect(generatedMap[token.chainId]?.[token.address]).toBeUndefined();
      }
    }
  });
});
