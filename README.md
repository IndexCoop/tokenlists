# tokenlists

npm: https://www.npmjs.com/package/@indexcoop/tokenlists

github: https://github.com/IndexCoop/tokenlists

---

<br/>

## Install

```
yarn add @indexcoop/tokenlists
```

---

<br/>

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

- `IndexCoopMainnetTokens`: Only IndexCoop mainnet tokens
- `IndexCoopMaticTokens`: Only IndexCoop matic network tokens
- `MainnetTokens`: All mainnet tokens, including `IndexCoopMainnetTokens`
- `MaticTokens`: All matic network tokens, including `IndexCoopMaticTokens`
- `TokenData`: The token interface used by the lists

---

<br/>

## Contributing

`npm run commit`

REQUIRED: Due to the use of [semantic-release](https://www.npmjs.com/package/semantic-release-cli) for deploying to npm's registry, we require commits to be formatted a specific way. This is made easy by the above npm script. If your commit doesn't use the above command for styling, it won't be picked up by semantic-release for publishing.

<br/>

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

<br/>

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
