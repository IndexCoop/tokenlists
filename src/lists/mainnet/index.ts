import {WRAPPED_21CO_TOKENS} from './21co-tokens';
import {INDEX_COOP_MAINNET_TOKENS} from './index-tokens';
import {MainnetTokens} from './mainnet';

export {INDEX_COOP_MAINNET_TOKENS} from './index-tokens';

export const MAINNET_TOKENS = [
  ...MainnetTokens,
  ...WRAPPED_21CO_TOKENS,
  ...INDEX_COOP_MAINNET_TOKENS,
];

export default MAINNET_TOKENS;
