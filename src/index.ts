/**
 * This is the index of the project. Default export from this file
 * can be imported from the published npm package like so:
 *
 * ```js
 * import PackageName from '@indexcoop/tokenlists';
 * ```
 *
 * And non-default exports can be imported like this:
 *
 * ```jss
 * import {functionName} from '@indexcoop/tokenlists';
 * ```
 */

import MAINNET_TOKENS from './lists/mainnet';
import MATIC_TOKENS, {INDEX_COOP_MATIC_TOKENS} from './lists/matic';

export const MainnetTokens = MAINNET_TOKENS;
export const MaticTokens = MATIC_TOKENS;
export const IndexCoopMaticTokens = INDEX_COOP_MATIC_TOKENS;
