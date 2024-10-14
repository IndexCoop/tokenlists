import type { IndexTokenList } from '@/src/types';
import { diffTokenLists, type TokenList } from '@uniswap/token-lists';
import isEmpty from 'lodash/isEmpty';

export const updateTokenListVersion = (
  tokenlistBase: TokenList,
  tokenlistUpdate: IndexTokenList,
  force: Partial<{ major: boolean; minor: boolean; patch: boolean }> = {},
) => {
  const diff = diffTokenLists(
    JSON.parse(JSON.stringify(tokenlistBase.tokens)),
    JSON.parse(JSON.stringify(tokenlistUpdate.tokens)),
  );

  if (!isEmpty(diff.removed) || force.major) {
    console.info('bump version: major');

    return Object.assign(tokenlistUpdate, {
      version: {
        major: tokenlistBase.version.major + 1,
        minor: 0,
        patch: 0,
      },
    });
  }

  if (!isEmpty(diff.added) || force.minor) {
    console.info('bump version: minor');

    return Object.assign(tokenlistUpdate, {
      version: {
        major: tokenlistBase.version.major,
        minor: tokenlistBase.version.minor + 1,
        patch: 0,
      },
    });
  }

  const onlyExtensionsChanged = Object.values(diff.changed)
    .flatMap((change) => Object.values(change).flat())
    .every((change) => change === 'extensions');

  if ((!isEmpty(diff.changed) && !onlyExtensionsChanged) || force.patch) {
    console.info('bump version: patch');

    return Object.assign(tokenlistUpdate, {
      version: {
        ...tokenlistBase.version,
        patch: tokenlistBase.version.patch + 1,
      },
    });
  }

  console.log('No changes detected, returning the original tokenlist.');
  return tokenlistBase;
};
