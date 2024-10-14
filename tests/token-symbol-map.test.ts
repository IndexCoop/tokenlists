import tokenlist from '../src/tokenlist.json';
import { tokenSymbolMap } from '../src';

describe('tokenSymbolMap', () => {
  // Test: Structure of tokenSymbolMap
  it('should generate a map with chainId as top-level key and symbol as secondary key', () => {
    const generatedMap = tokenSymbolMap;

    for (const token of tokenlist.tokens) {
      expect(generatedMap[token.chainId]).toBeDefined();
      // @ts-ignore
      expect(generatedMap[token.chainId][token.symbol]).toBeDefined();
    }
  });

  it('should map each symbol to its corresponding token', () => {
    const generatedMap = tokenSymbolMap;

    for (const token of tokenlist.tokens) {
      // @ts-ignore
      const mappedToken = generatedMap[token.chainId][token.symbol];
      expect(mappedToken).toEqual(token); // Ensure the token matches the expected token
    }
  });

  // Test: Handle edge cases (missing or invalid values)
  it('should handle edge cases with missing or invalid values', () => {
    const generatedMap = tokenSymbolMap;

    for (const token of tokenlist.tokens) {
      if (!token.chainId || !token.symbol) {
        // @ts-ignore
        expect(generatedMap[token.chainId]).toBeUndefined(); // Undefined if missing chainId
        // @ts-ignore
        expect(generatedMap[token.chainId]?.[token.symbol]).toBeUndefined(); // Undefined if missing symbol
      }
    }
  });
});
