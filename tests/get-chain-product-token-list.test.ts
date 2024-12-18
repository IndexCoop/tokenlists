import * as fc from 'fast-check';
import { existingChainIdArbitrary, invalidChainIdArbitrary } from './utils';
import tokenlist from '../src/tokenlist.json';
import { getChainProductTokenList } from '../src';

describe('getChainProductTokenList', () => {
  it('should accept any value but return an empty array for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(getChainProductTokenList(anyVal)).toEqual([]);
      }),
    );
  });

  it('should return all tokens for a valid chainId', () => {
    fc.assert(
      fc.property(existingChainIdArbitrary, (chainId) => {
        const expectedTokens = tokenlist.tokens.filter(
          (token) =>
            token.chainId === chainId &&
            token.tags.some((t) => t === 'product'),
        );

        const result = getChainProductTokenList(chainId);
        expect(result).toEqual(expectedTokens);
      }),
    );
  });

  it('should return an empty array for an invalid chainId', () => {
    fc.assert(
      fc.property(invalidChainIdArbitrary, (chainId) => {
        const result = getChainProductTokenList(chainId);
        expect(result).toEqual([]);
      }),
    );
  });
});
