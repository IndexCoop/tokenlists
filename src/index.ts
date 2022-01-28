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

import AVALANCHE_TOKENS, {INDEX_COOP_AVALANCHE_TOKENS} from './lists/avalanche';
import MAINNET_TOKENS, {INDEX_COOP_MAINNET_TOKENS} from './lists/mainnet';
import MATIC_TOKENS, {INDEX_COOP_MATIC_TOKENS} from './lists/matic';

export interface TokenData {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export const AvalancheTokens = AVALANCHE_TOKENS;
export const IndexCoopAvalancheTokens = INDEX_COOP_AVALANCHE_TOKENS;
export const MainnetTokens = MAINNET_TOKENS;
export const IndexCoopMainnetTokens = INDEX_COOP_MAINNET_TOKENS;
export const MaticTokens = MATIC_TOKENS;
export const IndexCoopMaticTokens = INDEX_COOP_MATIC_TOKENS;
