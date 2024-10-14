import * as fc from 'fast-check';
import {
  existingChainIdArbitrary,
  invalidChainIdArbitrary,
  tagArbitrary,
} from './utils';
import tokenlist from '../src/tokenlist.json';
import { getChainTokenList } from '../src';

describe('getChainTokenList', () => {
  it('should accept any value but return an empty array for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(getChainTokenList(anyVal)).toEqual([]);
      }),
    );
  });

  it('should return all tokens for a valid chainId', () => {
    fc.assert(
      fc.property(existingChainIdArbitrary, (chainId) => {
        const expectedTokens = tokenlist.tokens.filter(
          (token) => token.chainId === chainId,
        );
        const result = getChainTokenList(chainId);
        expect(result).toEqual(expectedTokens);
      }),
    );
  });

  it('should return tokens filtered by tags', () => {
    fc.assert(
      fc.property(existingChainIdArbitrary, tagArbitrary, (chainId, tags) => {
        const expectedTokens = tokenlist.tokens.filter(
          (token) =>
            token.chainId === chainId &&
            (tags.length > 0
              ? token.tags.some((tag) => tags.includes(tag))
              : true),
        );

        const result = getChainTokenList(chainId, tags);
        expect(result).toEqual(expectedTokens);
      }),
      { verbose: true },
    );
  });

  it('should return an empty array for an invalid chainId', () => {
    fc.assert(
      fc.property(invalidChainIdArbitrary, (chainId) => {
        const result = getChainTokenList(chainId);
        expect(result).toEqual([]);
      }),
    );
  });
});
