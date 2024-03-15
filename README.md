# tokenlists

npm: <https://www.npmjs.com/package/@indexcoop/tokenlists>

github: <https://github.com/IndexCoop/tokenlists>

---

## Install

```bash
yarn add @indexcoop/tokenlists
```

---

## Usage

```typescript
import {
  MainnetTokens,
  MaticTokens,
  IndexCoopMainnetTokens,
  IndexCoopMaticTokens,
  TokenData,
} from '@indexcoop/tokenlists';
```

- `IndexCoopMainnetTokens`: Only IndexCoop Mainnet tokens
- `IndexCoopMaticTokens`: Only IndexCoop Matic network tokens
- `IndexCoopArbitrumTokens`: Only IndexCoop Arbitrum roll-up tokens
- `IndexCoopOptimismTokens`: Only IndexCoop Optimism roll-up tokens
- `IndexCoopAvalanceTokens`: Only IndexCoop Avalanche network tokens
- `MainnetTokens`: All Mainnet tokens, including `IndexCoopMainnetTokens`
- `MaticTokens`: All Matic network tokens, including `IndexCoopMaticTokens`
- `ArbitrumTokens`: All Arbitrum roll-up tokens, including `IndexCoopArbitrumTokens`
- `OptimismTokens`: All Optimism roll-up tokens, including `IndexCoopOptimismTokens`
- `AvalancheTokens`: All Avalanche network tokens, including `IndexCoopAvalanceTokens`
- `TokenData`: The token interface used by the lists

---

## Contributing

`npm run commit`

REQUIRED: Due to the use of [semantic-release](https://www.npmjs.com/package/semantic-release-cli) for deploying to npm's registry, we require commits to be formatted a specific way. This is made easy by the above npm script. If your commit doesn't use the above command for styling, it won't be picked up by semantic-release for publishing.

### Adding IndexCoop Tokens

When adding IndexCoop tokens, find the IndexCoop specific array in the appropriate network file and append the IndexCoop list at the top as shown below.

```typescript
const INDEX_COOP_MAINNET_TOKENS: TokenData[] = [
  {
    address: '0x47110d43175f7f2c2425e7d15792acc5817eb44f',
    chainId: 1,
    name: 'My New Index',
    symbol: 'MNI',
    decimals: 18,
    logoURI:
      'https://docs.indexcoop.com/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MJY-enmfAw5ra2s-8QX%2Fuploads%2FAHyFusKCIRPu5o9FhZkk%2FGMI_LOGO-07.svg?alt=media&token=536da550-6d40-4f6c-b115-3b52a6365d64',
  },
  {...}
];
```

### Adding non-IndexCoop Tokens

When adding any other token, find the generic array in the appropriate network file and append the second array at the bottom as shown below.

```typescript
const MAINNET_TOKENS: TokenData[] = [
  {
    address: '0x47110d43175f7f2c2425e7d15792acc5817eb44f',
    chainId: 1,
    name: 'My New Token',
    symbol: 'MNT',
    decimals: 18,
    logoURI:
      'https://docs.indexcoop.com/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MJY-enmfAw5ra2s-8QX%2Fuploads%2FAHyFusKCIRPu5o9FhZkk%2FGMI_LOGO-07.svg?alt=media&token=536da550-6d40-4f6c-b115-3b52a6365d64',
  },
  {...}
];
```

### Adding a new network

When adding a new network, create a new file in `src/lists` named after the network, and copy the structure from any of the other lists.
File should include at a minimum:

- An exported `INDEX_COOP_NEW_NETWORK_TOKENS` TokenData array, containing only IndexCoop tokens on that network.
- A default exported `NEW_NETWORK_TOKENS` TokenData array, containing all tokens on that network, with the last item appended being the aforementioned `INDEX_COOP_[NETWORK]_TOKENS` array.

After this, `index.ts` should be updated to export the newly created lists as shown below:

```typescript
export const NewNetworkTokens = NEW_NETWORK_TOKENS;
export const IndexCoopNewNetworkTokens = INDEX_COOP_NEW_NETWORK_TOKENS;
```

When these are complete, update the `Usage` list above to show what lists are available to a user.

## Releasing

Releases are automatically pushed to npm via [publish.yml](.github/workflows/publish.yml)
