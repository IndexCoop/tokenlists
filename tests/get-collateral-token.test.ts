import * as fc from 'fast-check';
import {
  leverageTokenArbitrary,
  nonLeverageIndexTokenArbitrary,
  unlistedTokenArbitrary,
} from './utils';
import { getCollateralToken, isLeverageToken } from '../src/utils';
import tokenlist from '../src/tokenlist.json';

describe('getCollateralToken', () => {
  it('should accept any value but return null for it', () => {
    fc.assert(
      fc.property(fc.anything(), (anyVal) => {
        expect(getCollateralToken(anyVal)).toBeNull();
      }),
    );
  });

  it('should return null for non-leverage tokens', () => {
    fc.assert(
      fc.property(nonLeverageIndexTokenArbitrary, (nonLeverageToken) => {
        expect(getCollateralToken(nonLeverageToken)).toBeNull();
      }),
    );
  });

  it('should return null for unlisted tokens', () => {
    fc.assert(
      fc.property(unlistedTokenArbitrary, (unlistedToken) => {
        expect(getCollateralToken(unlistedToken)).toBeNull();
      }),
    );
  });

  it('should return the correct collateral token for leverage tokens', () => {
    fc.assert(
      fc.property(leverageTokenArbitrary, (leverageToken) => {
        const result = getCollateralToken(leverageToken);

        // Verify the token is a leverage token
        expect(isLeverageToken(leverageToken)).toBe(true);

        // Use type guard to ensure TypeScript knows this is a leverage token
        if (isLeverageToken(leverageToken)) {
          // Get the expected collateral token
          const collateralAddress =
            leverageToken.extensions.leverage.collateralAddress;

          // Find the expected token in the tokenlist
          const expectedToken = tokenlist.tokens.find(
            (token) =>
              token.chainId === leverageToken.chainId &&
              token.address.toLowerCase() === collateralAddress.toLowerCase(),
          );

          // If we found a matching token in the same chain
          if (expectedToken) {
            expect(result).toEqual(expectedToken);
          } else {
            // Check if there's a token on Ethereum mainnet (chainId 1)
            const mainnetToken = tokenlist.tokens.find(
              (token) =>
                token.chainId === 1 &&
                token.address.toLowerCase() === collateralAddress.toLowerCase(),
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

  it('should handle the case where collateral token is on a different chain', () => {
    // Find leverage tokens that have collateral tokens on a different chain
    const leverageTokensWithCrossChainCollateral = tokenlist.tokens.filter(
      (token) => {
        if (!isLeverageToken(token)) return false;

        const collateralAddress = token.extensions.leverage.collateralAddress;

        // Check if there's no token with this address on the same chain
        const sameChainToken = tokenlist.tokens.find(
          (t) =>
            t.chainId === token.chainId &&
            t.address.toLowerCase() === collateralAddress.toLowerCase(),
        );

        // Check if there's a token with this address on Ethereum mainnet
        const mainnetToken = tokenlist.tokens.find(
          (t) =>
            t.chainId === 1 &&
            t.address.toLowerCase() === collateralAddress.toLowerCase(),
        );

        // Return true if there's no same-chain token but there is a mainnet token
        return !sameChainToken && mainnetToken;
      },
    );

    // If we found any such tokens, test them specifically
    if (leverageTokensWithCrossChainCollateral.length > 0) {
      for (const token of leverageTokensWithCrossChainCollateral) {
        if (isLeverageToken(token)) {
          const result = getCollateralToken(token);

          const collateralAddress = token.extensions.leverage.collateralAddress;
          const mainnetToken = tokenlist.tokens.find(
            (t) =>
              t.chainId === 1 &&
              t.address.toLowerCase() === collateralAddress.toLowerCase(),
          );

          expect(result).toEqual(mainnetToken);
        }
      }
    } else {
      // If no such tokens exist, this test is not applicable
      console.log(
        'No leverage tokens with cross-chain collateral tokens found',
      );
    }
  });
});
