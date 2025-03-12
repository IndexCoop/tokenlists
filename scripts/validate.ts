import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { schema } from '@uniswap/token-lists';
import { erc20Abi, getContract } from 'viem';
import { staticClients } from '@/config/networks';
import type { IndexTokenList, LeverageToken } from '@/src/types';
import validationExceptions from '@/config/validation-exceptions';
import { getTokenByChainAndAddress, isLeverageToken } from '@/src';

export const matchTokens = async (tokenlist: IndexTokenList) => {
  const result = await Promise.all(
    tokenlist.tokens.map(async (token) => {
      const client = staticClients[token.chainId];

      // If there is no contract deployed, list the token's Symbol in the ValidationExceptions
      if (validationExceptions.includes(token.symbol)) {
        console.log(`ℹ️ -> ${token.symbol} is exempt from onchain validation.`);
        return {
          success: true,
          values: {
            localSymbol: token.symbol,
            onchainSymbol: token.symbol,
            localDecimals: token.decimals,
            onchainDecimals: token.decimals,
          },
        };
      }

      const contract = getContract({
        address: token.address,
        abi: erc20Abi,
        client,
      });

      try {
        const symbol = await contract.read.symbol();
        const decimals = await contract.read.decimals();

        return {
          success: true,
          values: {
            localSymbol: token.symbol,
            onchainSymbol: symbol,
            localDecimals: token.decimals,
            onchainDecimals: decimals,
          },
        };
      } catch (error) {
        return {
          success: false,
          values: {
            localSymbol: token.symbol,
            onchainSymbol: undefined,
            localDecimals: token.decimals,
            onchainDecimals: undefined,
          },
        };
      }
    }),
  );

  return result;
};

export const matchLogoUris = async (tokenlist: IndexTokenList) => {
  const result = await Promise.all(
    tokenlist.tokens.map(async (token) => {
      try {
        const response = await fetch(token.logoURI);

        if (response.status === 200) {
          return { [token.symbol]: 'success' };
        }

        return { [`${token.chainId}:${token.symbol}`]: 'error' };
      } catch (error) {
        return { [`${token.chainId}:${token.symbol}`]: 'error' };
      }
    }),
  );

  return result;
};

export const validateSchema = (tokenlist: IndexTokenList) => {
  const ajv = new Ajv({ verbose: true, allErrors: true });
  addFormats(ajv);
  const validator = ajv.compile(schema);

  const valid = validator(tokenlist);
  if (valid) {
    return valid;
  }

  if (validator.errors) {
    throw validator.errors.map((error) => {
      error.data = undefined;
      return error;
    });
  }
};

const validateLeverageParentTokens = (
  tokenlist: IndexTokenList,
  type: 'underlying' | 'collateral',
) => {
  const leverageTokens = tokenlist.tokens.filter(isLeverageToken);

  const prop =
    type === 'underlying' ? 'underlyingAddress' : 'collateralAddress';

  const result = leverageTokens.reduce(
    (acc, token) => {
      const parentToken = getTokenByChainAndAddress(
        token.chainId,
        token.extensions.leverage[prop],
      );

      const mainnetToken = getTokenByChainAndAddress(
        1,
        token.extensions.leverage[prop],
      );

      if (!parentToken && !mainnetToken) {
        acc.tokenNotFound.push({
          symbol: token.symbol,
          chainId: token.chainId,
        });
      } else if (parentToken?.chainId !== token.chainId && !mainnetToken) {
        acc.chainId.push({
          symbol: token.symbol,
          chainId: token.chainId,
        });
      }

      if (
        !parentToken?.extensions.coingeckoId &&
        !mainnetToken?.extensions.coingeckoId
      ) {
        acc.coingeckoId.push({
          symbol: token.symbol,
          chainId: token.chainId,
        });
      }

      return acc;
    },
    {
      tokenNotFound: [] as { symbol: string; chainId: number }[],
      chainId: [] as { symbol: string; chainId: number }[],
      coingeckoId: [] as { symbol: string; chainId: number }[],
    },
  );

  return result;
};

export const validate = async (tokenlist: IndexTokenList) => {
  try {
    validateSchema(tokenlist);
    console.log('✅ Tokenlist schema is valid.');
    const result = await matchTokens(tokenlist);

    const tokenContractsMissing = result.filter(
      ({ success }) => success === false,
    );

    const invalidSymbols = result.filter(
      ({ success, values }) =>
        success === true && values.localSymbol !== values.onchainSymbol,
    );

    const invalidDecimals = result.filter(
      ({ success, values }) =>
        success === true && values.localDecimals !== values.onchainDecimals,
    );

    if (
      tokenContractsMissing.concat(invalidSymbols, invalidDecimals).length > 0
    ) {
      const tokenContractsMissingMsg =
        tokenContractsMissing.length > 0
          ? `\nMissing token contracts: ${tokenContractsMissing.map(({ values }) => `\n-\t${values.localSymbol}`).join('')}`
          : '';
      const invalidSymbolsMsg =
        invalidSymbols.length > 0
          ? `Mismatching symbols:\n-\t${invalidSymbols.map(({ values }) => `${values.localSymbol} (local) vs. ${values.onchainSymbol} (onchain)`).join('\n-\t')}`
          : '';
      const invalidDecimalsMsg =
        invalidDecimals.length > 0
          ? `Mismatching decimals:\n-\t${invalidDecimals.map(({ values }) => `${values.localSymbol}:${values.localDecimals} (local) vs. ${values.onchainSymbol}:${values.onchainDecimals} (onchain)`).join('\n-\t')}`
          : '';

      throw new Error(
        `${tokenContractsMissingMsg}\n${invalidSymbolsMsg}\n${invalidDecimalsMsg}`,
      );
    }

    console.log('✅ All token contracts found, symbols, and decimals match.');

    const invalidLogoURIs = await matchLogoUris(tokenlist);
    const invalidLogos = invalidLogoURIs.filter(
      (result) => Object.values(result)[0] === 'error',
    );

    if (invalidLogos.length > 0) {
      console.log(
        `ℹ️ -> ${invalidLogos.map((result) => Object.keys(result)[0])} have invalid logoURI's.`,
      );
    }

    console.log("✅ All token logoURI's fetched, and available.");

    const {
      tokenNotFound: leverageUnderlyingMissing,
      chainId: leverageUnderlyingChainIdMismatch,
      coingeckoId: leverageUnderlyingCoingeckoIdMissing,
    } = validateLeverageParentTokens(tokenlist, 'underlying');
    const {
      tokenNotFound: leverageCollateralMissing,
      chainId: leverageCollateralChainIdMismatch,
      coingeckoId: leverageCollateralCoingeckoIdMissing,
    } = validateLeverageParentTokens(tokenlist, 'collateral');

    if (
      leverageUnderlyingMissing.concat(
        leverageCollateralMissing,
        leverageUnderlyingChainIdMismatch,
        leverageCollateralChainIdMismatch,
        leverageUnderlyingCoingeckoIdMissing,
        leverageCollateralCoingeckoIdMissing,
      ).length > 0
    ) {
      const leverageUnderlyingMissingMsg =
        leverageUnderlyingMissing.length > 0
          ? `\nMissing Underlying for: ${leverageUnderlyingMissing.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';
      const leverageCollateralMissingMsg =
        leverageCollateralMissing.length > 0
          ? `\nMissing Collateral for: ${leverageCollateralMissing.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';
      const leverageUnderlyingChainIdMismatchMsg =
        leverageUnderlyingChainIdMismatch.length > 0
          ? `\nUnderlying Chain ID mismatch for: ${leverageUnderlyingChainIdMismatch.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';
      const leverageCollateralChainIdMismatchMsg =
        leverageCollateralChainIdMismatch.length > 0
          ? `\nCollateral Chain ID mismatch for: ${leverageCollateralChainIdMismatch.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';

      const leverageUnderlyingCoingeckoIdMissingMsg =
        leverageUnderlyingCoingeckoIdMissing.length > 0
          ? `\nMissing Coingecko ID for: ${leverageUnderlyingCoingeckoIdMissing.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';
      const leverageCollateralCoingeckoIdMissingMsg =
        leverageCollateralCoingeckoIdMissing.length > 0
          ? `\nMissing Coingecko ID for: ${leverageCollateralCoingeckoIdMissing.map(({ symbol, chainId }) => `\n-\t${chainId}:${symbol}`).join('')}`
          : '';

      throw new Error(
        `${leverageUnderlyingMissingMsg}\n${leverageCollateralMissingMsg}\n${leverageUnderlyingChainIdMismatchMsg}\n${leverageCollateralChainIdMismatchMsg}\n${leverageUnderlyingCoingeckoIdMissingMsg}\n${leverageCollateralCoingeckoIdMissingMsg}`,
      );
    }

    console.log('✅ All leverage tokens have valid parent tokens.');

    console.log('✅ Tokenlist is valid.');
  } catch (error) {
    console.log('❌ Tokenlist is invalid.');
    console.error(error);
  }
};
