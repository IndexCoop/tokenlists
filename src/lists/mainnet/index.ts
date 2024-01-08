import {WRAPPED_21CO_TOKENS} from './21co-tokens';
import {INDEX_COOP_MAINNET_TOKENS} from './index-tokens';
import {MAINNET} from './mainnet';

export {WRAPPED_21CO_TOKENS} from './21co-tokens';
export {INDEX_COOP_MAINNET_TOKENS} from './index-tokens';

export const MAINNET_TOKENS = [
  ...MAINNET,
  ...WRAPPED_21CO_TOKENS,
  ...INDEX_COOP_MAINNET_TOKENS,
];
