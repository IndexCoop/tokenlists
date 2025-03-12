import * as fc from 'fast-check';
import { leverageTokenArbitrary, unlistedTokenArbitrary } from './utils';
import { getUnderlyingToken, isLeverageToken } from '../src/utils';
import tokenlist from '../src/tokenlist.json';

describe('getUnderlyingToken', () => {
  it('should accept any value but return null for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(getUnderlyingToken(anyVal)).toBeNull();
      }),
    );
  });

  it('should return null for non-leverage tokens', () => {
    // Create a non-leverage token arbitrary by filtering out leverage tokens
    const nonLeverageTokens = tokenlist.tokens.filter(
      (token) => !('leverage' in token.extensions),
    );

    if (nonLeverageTokens.length > 0) {
      fc.assert(
        fc.property(
          fc.constantFrom(...nonLeverageTokens),
          (nonLeverageToken) => {
            expect(getUnderlyingToken(nonLeverageToken)).toBeNull();
          },
        ),
      );
    }
  });

  it('should return null for unlisted tokens', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(getUnderlyingToken(unlistedToken)).toBeNull();
      }),
    );
  });

  it('should return the correct underlying token for leverage tokens', () => {
    fc.assert(
      fc.property(leverageTokenArbitrary, (leverageToken) => {
        const result = getUnderlyingToken(leverageToken);

        // Verify the token is a leverage token
        expect(isLeverageToken(leverageToken)).toBe(true);

        // Use type guard to ensure TypeScript knows this is a leverage token
        if (isLeverageToken(leverageToken)) {
          // Get the expected underlying token
          const underlyingAddress =
            leverageToken.extensions.leverage.underlyingAddress;

          // Find the expected token in the tokenlist
          const expectedToken = tokenlist.tokens.find(
            (token) =>
              token.chainId === leverageToken.chainId &&
              token.address.toLowerCase() === underlyingAddress.toLowerCase(),
          );

          // If we found a matching token in the same chain
          if (expectedToken) {
            expect(result).toEqual(expectedToken);
          } else {
            // Check if there's a token on Ethereum mainnet (chainId 1)
            const mainnetToken = tokenlist.tokens.find(
              (token) =>
                token.chainId === 1 &&
                token.address.toLowerCase() === underlyingAddress.toLowerCase(),
            );

            if (mainnetToken) {
              expect(result).toEqual(mainnetToken);
            } else {
              // If no token is found on the same chain or mainnet, result should be null
              expect(result).toBeNull();
            }
          }
        }
      }),
    );
  });

  it('should handle the case where underlying token is on a different chain', () => {
    // Find leverage tokens that have underlying tokens on a different chain
    const leverageTokensWithCrossChainUnderlying = tokenlist.tokens.filter(
      (token) => {
        if (!isLeverageToken(token)) return false;

        const underlyingAddress = token.extensions.leverage.underlyingAddress;

        // Check if there's no token with this address on the same chain
        const sameChainToken = tokenlist.tokens.find(
          (t) =>
            t.chainId === token.chainId &&
            t.address.toLowerCase() === underlyingAddress.toLowerCase(),
        );

        // Check if there's a token with this address on Ethereum mainnet
        const mainnetToken = tokenlist.tokens.find(
          (t) =>
            t.chainId === 1 &&
            t.address.toLowerCase() === underlyingAddress.toLowerCase(),
        );

        // Return true if there's no same-chain token but there is a mainnet token
        return !sameChainToken && mainnetToken;
      },
    );

    // If we found any such tokens, test them specifically
    if (leverageTokensWithCrossChainUnderlying.length > 0) {
      for (const token of leverageTokensWithCrossChainUnderlying) {
        if (isLeverageToken(token)) {
          const result = getUnderlyingToken(token);

          const underlyingAddress = token.extensions.leverage.underlyingAddress;
          const mainnetToken = tokenlist.tokens.find(
            (t) =>
              t.chainId === 1 &&
              t.address.toLowerCase() === underlyingAddress.toLowerCase(),
          );

          expect(result).toEqual(mainnetToken);
        }
      }
    } else {
      // If no such tokens exist, this test is not applicable
      console.log(
        'No leverage tokens with cross-chain underlying tokens found',
      );
    }
  });
});
