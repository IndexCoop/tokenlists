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

import ARBITRUM_TOKENS, {INDEX_COOP_ARBITRUM_TOKENS} from './lists/arbitrum';
import AVALANCHE_TOKENS, {INDEX_COOP_AVALANCHE_TOKENS} from './lists/avalanche';
import {INDEX_COOP_MAINNET_TOKENS, MAINNET_TOKENS} from './lists/mainnet';
import MATIC_TOKENS, {INDEX_COOP_MATIC_TOKENS} from './lists/matic';
import OPTIMISM_TOKENS, {INDEX_COOP_OPTIMISM_TOKENS} from './lists/optimism';

export interface TokenData {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export const ArbitrumTokens = ARBITRUM_TOKENS;
export const IndexCoopArbitrumTokens = INDEX_COOP_ARBITRUM_TOKENS;
export const AvalancheTokens = AVALANCHE_TOKENS;
export const IndexCoopAvalancheTokens = INDEX_COOP_AVALANCHE_TOKENS;
export const MainnetTokens = MAINNET_TOKENS;
export const IndexCoopMainnetTokens = INDEX_COOP_MAINNET_TOKENS;
export const MaticTokens = MATIC_TOKENS;
export const IndexCoopMaticTokens = INDEX_COOP_MATIC_TOKENS;
export const OptimismTokens = OPTIMISM_TOKENS;
export const IndexCoopOptimismTokens = INDEX_COOP_OPTIMISM_TOKENS;

export * from './utils';
