import * as fc from 'fast-check';
import { existingChainIdArbitrary, invalidChainIdArbitrary } from './utils';
import tokenlist from '../src/tokenlist.json';
import { getChainComponentTokenList } from '../src';

describe('getChainComponentTokenList', () => {
  it('should accept any value but return an empty array for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(getChainComponentTokenList(anyVal)).toEqual([]);
      }),
    );
  });

  it('should return all tokens for a valid chainId', () => {
    fc.assert(
      fc.property(existingChainIdArbitrary, (chainId) => {
        const expectedTokens = tokenlist.tokens.filter(
          (token) =>
            token.chainId === chainId &&
            token.tags.some((t) => t === 'component'),
        );

        const result = getChainComponentTokenList(chainId);
        expect(result).toEqual(expectedTokens);
      }),
    );
  });

  it('should return an empty array for an invalid chainId', () => {
    fc.assert(
      fc.property(invalidChainIdArbitrary, (chainId) => {
        const result = getChainComponentTokenList(chainId);
        expect(result).toEqual([]);
      }),
    );
  });
});
