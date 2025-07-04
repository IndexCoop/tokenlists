import tokenlist from '../indexcoop.tokenlist.json';

export default {
  name: 'IndexCoop Token List',
  version: tokenlist.version,
  timestamp: new Date().toISOString(),
  tags: {
    component: {
      name: 'Component Token',
      description: 'This token is a component of some index product token.',
    },
    currency: {
      name: 'Currency Token',
      description: 'This token is used to pay for index tokens.',
    },
    dangerous: {
      name: 'Dangerous Token',
      description: 'This is a token that is considered risky or dangerous.',
    },
    index: {
      name: 'Index Token',
      description: 'This is an Index Coop token.',
    },
    leverage: {
      name: 'Leverage Token',
      description: 'This token provides leveraged exposure.',
    },
    product: {
      name: 'Product Token',
      description: 'This token is a product of Index Coop.',
    },
    prt: {
      name: 'PRT',
      description:
        'Product Revenue Tokens, PRTs for short, distribute an Index products revenue amongst all PRT holders by staking PRTs in the respective IC product revenue pool.',
    },
    underlying: {
      name: 'Underlying Token',
      description: 'This is an underlying token for another token.',
    },
    collateral: {
      name: 'Collateral Token',
      description: 'This token is a collateral token for a leverage token.',
    },
    sector: {
      name: 'Sector Token',
      description: 'This token represents a basket of tokens.',
    },
    stablecoin: {
      name: 'Stablecoin',
      description: 'This is a stablecoin.',
    },
    yield: {
      name: 'Yield Token',
      description: 'This is a token that accrues yield.',
    },
  },
  tokens: [
    {
      address: '0x0954906da0Bf32d5479e25f46056d22f08464cab',
      name: 'Index Token',
      symbol: 'INDEX',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'index-cooperative',
      },
      logoURI: 'https://cdn.indexcoop.com/index.svg',
      tags: ['index'],
    },
    // --------------- Sector Tokens ---------------
    {
      address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      name: 'DeFi Pulse Index',
      symbol: 'DPI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'defi-pulse-index',
        sector: {
          theme: 'DeFi',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'product', 'sector', 'component'],
    },
    {
      address: '0x9737C658272e66Faad39D7AD337789Ee6D54F500',
      name: 'DeFi Pulse Index',
      symbol: 'DPI',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: 'defi-pulse-index',
        sector: {
          theme: 'DeFi',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0xc6955B85b622369a54Cc8C6DBeCb8e03c0885BD8',
      name: 'DeFi Pulse Index',
      symbol: 'DPI',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: 'defi-pulse-index',
        sector: {
          theme: 'DeFi',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dpi.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0x72e364F2ABdC788b7E918bc238B21f109Cd634D7',
      name: 'Metaverse Index',
      symbol: 'MVI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'metaverse-index',
        sector: {
          theme: 'Metaverse',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0x0104a6FA30540DC1d9F45D2797F05eEa79304525',
      name: 'Metaverse Index',
      symbol: 'MVI',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: 'metaverse-index',
        sector: {
          theme: 'Metaverse',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0xEA8954dE7607b90F5ec81A5e2e673D0f60BB7596',
      name: 'Metaverse Index',
      symbol: 'MVI',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: 'metaverse-index',
        sector: {
          theme: 'Metaverse',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/mvi.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6',
      name: 'Bankless BED Index',
      symbol: 'BED',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Hibernated',
        coingeckoId: 'bankless-bed-index',
        sector: {
          theme: 'Metaverse',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/bed.svg',
      tags: ['index', 'product', 'sector'],
    },
    {
      address: '0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1',
      name: 'DATA Economy Index',
      symbol: 'DATA',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        sector: {
          theme: 'Data',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/index.svg',
      tags: ['index', 'product', 'sector', 'dangerous'],
    },
    {
      address: '0x47110d43175f7f2C2425E7d15792acC5817EB44f',
      name: 'Bankless DeFi Innovation Index',
      symbol: 'GMI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        sector: {
          theme: 'DeFi',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/gmi.svg',
      tags: ['index', 'product', 'sector', 'dangerous'],
    },
    {
      address: '0x1B5E16C5b20Fb5EE87C61fE9Afe735Cca3B21A65',
      name: 'Index Coop Large Cap Index',
      symbol: 'ic21',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        sector: {
          theme: 'LCap',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ic21.svg',
      tags: ['index', 'product', 'sector', 'dangerous'],
    },
    {
      address: '0x7f5f1A44dd6f88cCb54Fe879e144dF644A4aDa24',
      name: 'Real World Asset Index',
      symbol: 'RWA',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        sector: {
          theme: 'Real World',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/rwa.svg',
      tags: ['index', 'product', 'sector', 'dangerous'],
    },
    // --------------- Leverage Tokens ---------------
    {
      address: '0x77F69104145f94a81cEC55747C7a0Fc9CB7712C3',
      name: 'Index Coop 2x BTC Short 1x ETH Ratio',
      symbol: 'BTC2xETH',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          collateralAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2xeth.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xE7b1Ce8DfEE3D7417397cd4f56dBFc0d49E43Ed1',
      name: 'Index Coop 2x ETH Short 1x BTC Ratio',
      symbol: 'ETH2xBTC',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          collateralAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2xbtc.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
      name: 'ETH 2x Flexible Leverage Index',
      symbol: 'ETH2x-FLI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'eth-2x-flexible-leverage-index',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xcCdAE12162566E3f29fEfA7Bf7F5b24C644493b5',
      name: 'Leveraged rETH Staking Yield',
      symbol: 'icRETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'eleveraged-reth-staking-yield',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0xae78736Cd615f374D3085123A210448E74Fc6393',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/icreth.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x0B498ff89709d3838a063f1dFA463091F9801c2b',
      name: 'BTC 2x Flexible Leverage Index',
      symbol: 'BTC2x-FLI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'btc-2x-flexible-leverage-index',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x65c4C0517025Ec0843C9146aF266A2C5a2D148A2',
      name: 'Index Coop Ethereum 2x Index',
      symbol: 'ETH2X',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'index-coop-ethereum-2x-index',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous', 'component'],
    },
    {
      address: '0xD2AC55cA3Bbd2Dd1e9936eC640dCb4b745fDe759',
      name: 'Index Coop Bitcoin 2x Index',
      symbol: 'BTC2X',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'index-coop-bitcoin-2x-index',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous', 'component'],
    },
    {
      address: '0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C',
      name: 'Index Coop Ethereum 2x Index',
      symbol: 'ETH2X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xA0A17b2a015c14BE846C5d309D076379cCDfa543',
      name: 'Index Coop Ethereum 3x Index',
      symbol: 'ETH3X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x749654601a286833aD30357246400D2933b1C89b',
      name: 'Index Coop Inverse Ethereum Index',
      symbol: 'iETH1X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
          underlyingAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ieth1x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x186F3d8BB80DFF50750bABc5A4bcC33134c39cDe',
      name: 'Index Coop Bitcoin 2x Index',
      symbol: 'BTC2X',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xeb5bE62e6770137beaA0cC712741165C594F59D7',
      name: 'Index Coop Bitcoin 2x Index',
      symbol: 'BTC2X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: 'index-coop-bitcoin-2x-index',
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x1F4609133b6dAcc88f2fa85c2d26635554685699',
      name: 'Index Coop Bitcoin 3x Index',
      symbol: 'BTC3X',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x3bDd0d5c0C795b2Bf076F5C8F177c58e42beC0E6',
      name: 'Index Coop Bitcoin 3x Index',
      symbol: 'BTC3X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x80e58AEA88BCCaAE19bCa7f0e420C1387Cc087fC',
      name: 'Index Coop Inverse Bitcoin Index',
      symbol: 'iBTC1X',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
          underlyingAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          collateralAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ibtc1x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xC884646E6C88d9b172a23051b38B0732Cc3E35a6',
      name: 'Index Coop Ethereum 2x Index',
      symbol: 'ETH2X',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x4200000000000000000000000000000000000006',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x329f6656792c7d34D0fBB9762FA9A8F852272acb',
      name: 'Index Coop Ethereum 3x Index',
      symbol: 'ETH3X',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x4200000000000000000000000000000000000006',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xd6cA869a4EC9eD2C7E618062Cdc45306d8dBBc14',
      name: 'Bitcoin 2x Flexible Leverage Index',
      symbol: 'BTC2x-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // mainnet
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // mainnet
        },
      },
      logoURI: 'https://cdn.indexcoop.com/btc2xflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x3Ad707dA309f3845cd602059901E39C4dcd66473',
      name: 'ETH 2x Flexible Leverage Index',
      symbol: 'ETH2x-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // mainnet
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // mainnet
        },
      },
      logoURI: 'https://cdn.indexcoop.com/eth2xflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x130cE4E4F76c2265f94a961D70618562de0bb8d2',
      name: 'Inverse BTC Flexible Leverage Index',
      symbol: 'iBTC-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
          underlyingAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // mainnet
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // mainnet
        },
      },
      logoURI: 'https://cdn.indexcoop.com/ibtcflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x4f025829C4B13dF652f38Abd2AB901185fF1e609',
      name: 'Inverse ETH Flexible Leverage Index',
      symbol: 'iETH-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
          underlyingAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // mainnet
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // mainnet
        },
      },
      logoURI: 'https://cdn.indexcoop.com/iethflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x340f412860dA7b7823df372a2b59Ff78b7ae6abc',
      name: 'Inverse MATIC Flexible Leverage Index',
      symbol: 'iMATIC-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Short1x',
          underlyingAddress: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/imaticflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0xf287D97B6345bad3D88856b26Fb7c0ab3F2C7976',
      name: 'MATIC 2x Flexible Leverage Index',
      symbol: 'MATIC2x-FLI-P',
      decimals: 18,
      chainId: 137,
      extensions: {
        status: 'Deprecated',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
          collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/matic2xflip.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x0A0Fbd86d2dEB53D7C65fecF8622c2Fa0DCdc9c6',
      name: 'uSOL/USDC 2x  Leverage Morpho',
      symbol: 'uSOL2x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/usol2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x16c469F88979e19A53ea522f0c77aFAD9A043571',
      name: 'uSOL/USDC 3x Leverage Morpho',
      symbol: 'uSOL3x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/usol3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x2F67e4bE7fBF53dB88881324AAc99e9D85208d40',
      name: 'uSUI/USDC 2x Leverage Morpho',
      symbol: 'uSUI2x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/usui2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x8D08CE52e217aD61deb96dFDcf416B901cA2dC22',
      name: 'uSUI/USDC 3x Leverage Morpho',
      symbol: 'uSUI3x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/usui3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x32BB8FF692A2F14C05Fe7a5ae78271741bD392fC',
      name: 'uXRP/USDC 2x Leverage Morpho',
      symbol: 'uXRP2x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long2x',
          underlyingAddress: '0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/uxrp2x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    {
      address: '0x5c600527D2835F3021734504E53181E54fA48f73',
      name: 'uXRP/USDC 3x Leverage Morpho',
      symbol: 'uXRP3x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        leverage: {
          type: 'Long3x',
          underlyingAddress: '0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE',
          collateralAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/uxrp3x.svg',
      tags: ['index', 'product', 'leverage', 'dangerous'],
    },
    // --------------- Yield Tokens ---------------
    {
      address: '0xc8DF827157AdAf693FCb0c6f305610C28De739FD',
      name: 'Staked ETH 15x',
      symbol: 'wstETH15x',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },

      logoURI: 'https://cdn.indexcoop.com/wsteth15x.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x7C07F7aBe10CE8e33DC6C5aD68FE033085256A84',
      name: 'Interest Compounding ETH Index',
      symbol: 'icETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'interest-compounding-eth-index',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/iceth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x341c05c0E9b33C0E38d64de76516b2Ce970bB3BE',
      name: 'Diversified Staked ETH Index',
      symbol: 'dsETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: 'diversified-staked-eth',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'product', 'yield', 'component', 'dangerous'],
    },
    {
      address: '0x95b11aca35D35Ac8B8A88E1F7792873BBea7CeBb',
      name: 'Diversified Staked ETH Index',
      symbol: 'dsETH',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: 'diversified-staked-eth',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x37E7C051Dc5A24313cEEC581222882648ba537aa',
      name: 'Diversified Staked ETH Index',
      symbol: 'dsETH',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: 'diversified-staked-eth',
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/dseth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x36c833Eed0D376f75D1ff9dFDeE260191336065e',
      name: 'Gitcoin Staked ETH Index',
      symbol: 'gtcETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/gtceth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0xc4506022Fb8090774E8A628d5084EED61D9B99Ee',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x8b5D1d8B3466eC21f8eE33cE63F319642c026142',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 42161,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0xC73e76Aa9F14C1837CDB49bd028E8Ff5a0a71dAD',
      name: 'High Yield ETH Index',
      symbol: 'hyETH',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x701907283a57FF77E255C3f1aAD790466B8CE4ef',
      name: 'Morpho IndexCoop hyETH',
      symbol: 'mhyETH',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/hyeth.svg',
      tags: ['component'],
    },
    {
      address: '0x55b2CFcfe99110C773f00b023560DD9ef6C8A13B',
      name: 'CoinDesk ETH Trend Index',
      symbol: 'cdETI',
      decimals: 18,
      chainId: 1,
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'ETH',
        },
      },
      logoURI: 'https://cdn.indexcoop.com/cdeti.svg',
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0x54EE8A49155F701F0d5Ff088CD36fbBF1a5B9f44',
      chainId: 1,
      name: 'The USDC Yield Index',
      symbol: 'icUSD',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/icusd.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'USDC',
        },
      },
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    {
      address: '0xF06A59348712a11e7823Ad8BFc45c59f7EAFCc60',
      chainId: 8453,
      name: 'The USDC Yield Index',
      symbol: 'icUSD',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/icusd.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        yield: {
          theme: 'USDC',
        },
      },
      tags: ['index', 'product', 'yield', 'dangerous'],
    },
    // --------------- Product Revenue Tokens ---------------
    {
      address: '0x99F6539Df9840592a862ab916dDc3258a1D7a773',
      chainId: 1,
      name: 'High Yield ETH Index PRT',
      symbol: 'prtHyETH',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/hyeth-prt.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        prt: {
          rewardToken: '0xc4506022Fb8090774E8A628d5084EED61D9B99Ee',
          stakedToken: '0x99F6539Df9840592a862ab916dDc3258a1D7a773',
        },
      },
      tags: ['index', 'prt'],
    },
    {
      address: '0xBe03026716a4D5E0992F22A3e6494b4F2809a9C6',
      chainId: 1,
      name: 'High Yield ETH Index Staked PRT',
      symbol: 'sPrtHyETH',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/hyeth-prt.svg',
      extensions: {
        status: 'Active',
        coingeckoId: null,
        prt: {
          rewardToken: '0xc4506022Fb8090774E8A628d5084EED61D9B99Ee',
          stakedToken: '0x99F6539Df9840592a862ab916dDc3258a1D7a773',
        },
      },
      tags: ['index', 'prt'],
    },
    // --------------- Component Tokens ---------------
    {
      chainId: 8453,
      address: '0xBdb9300b7CDE636d9cD4AFF00f6F009fFBBc8EE6',
      name: 'Aave Base cbBTC',
      symbol: 'aBascbBTC',
      decimals: 8,
      logoURI: 'https://basescan.org/token/images/aavecbbtc_32.png',
      extensions: {
        status: 'Active',
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      chainId: 137,
      address: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
      name: 'Aave Matic Market USDC',
      symbol: 'amUSDC',
      decimals: 6,
      logoURI:
        'https://assets.coingecko.com/coins/images/17249/large/amUSDC_2x.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'aave-polygon-usdc',
      },
      tags: ['component'],
    },
    {
      chainId: 137,
      address: '0x5c2ed810328349100A66B82b78a1791B101C9D61',
      name: 'Aave Matic Market WBTC',
      symbol: 'amWBTC',
      decimals: 8,
      logoURI:
        'https://assets.coingecko.com/coins/images/17265/large/amWBTC_2x.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'aave-polygon-wbtc',
      },
      tags: ['component'],
    },
    {
      chainId: 137,
      address: '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390',
      name: 'Aave Matic Market WETH',
      symbol: 'amWETH',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/17266/large/amWETH_2x.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'aave-polygon-weth',
      },
      tags: ['component'],
    },
    {
      chainId: 137,
      address: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
      name: 'Aave Matic Market WMATIC',
      symbol: 'amWMATIC',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/17267/large/amWMATIC_2x.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'aave-polygon-wmatic',
      },
      tags: ['component', 'underlying'],
    },
    {
      address: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
      chainId: 8453,
      name: 'Coinbase Wrapped BTC',
      symbol: 'cbBTC',
      decimals: 8,
      logoURI:
        'https://assets.coingecko.com/coins/images/40143/large/cbbtc.webp',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      name: 'Ethereum Name Service',
      symbol: 'ENS',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140',
      extensions: {
        status: 'Active',
        coingeckoId: 'ethereum-name-service',
        bridgeInfo: {
          '10': {
            tokenAddress: '0x65559aA14915a70190438eF90104769e5E890A00',
          },
          '42161': {
            tokenAddress: '0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28',
          },
        },
      },
      tags: ['component'],
    },
    {
      chainId: 42161,
      address: '0xfeA31d704DEb0975dA8e77Bf13E04239e70d7c28',
      name: 'Ethereum Name Service',
      symbol: 'ENS',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg?1635850140',
      extensions: {
        status: 'Active',
        coingeckoId: 'ethereum-name-service',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
          },
        },
      },
      tags: ['component'],
    },
    {
      address: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
      chainId: 1,
      name: 'CompoundETH',
      symbol: 'cETH',
      decimals: 8,
      logoURI:
        'https://tokens.1inch.io/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'compound-ether',
      },
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
      name: 'Compound Wrapped BTC',
      symbol: 'cWBTC',
      decimals: 8,
      extensions: {
        status: null,
        coingeckoId: 'compound-wrapped-btc',
      },
      logoURI:
        'https://tokens.1inch.io/0xccf4429db6322d5c611ee964527d42e5d685dd6a.png',
      tags: ['component'],
    },
    {
      address: '0x3f67093dfFD4F0aF4f2918703C92B60ACB7AD78b',
      chainId: 1,
      name: '21.co Wrapped Bitcoin',
      symbol: '21BTC',
      decimals: 8,
      logoURI: 'https://cdn.indexcoop.com/21btc.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'bitcoin',
      },
      tags: ['component'],
    },
    {
      address: '0x1bE9d03BfC211D83CFf3ABDb94A75F9Db46e1334',
      chainId: 1,
      name: '21.co Wrapped BNB',
      symbol: '21BNB',
      decimals: 8,
      logoURI: 'https://cdn.indexcoop.com/21bnb.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'binancecoin',
      },
      tags: ['component'],
    },
    {
      address: '0xFf4927e04c6a01868284F5C3fB9cba7F7ca4aeC0',
      chainId: 1,
      name: '21.co Wrapped BitcoinCash',
      symbol: '21BCH',
      decimals: 8,
      logoURI: 'https://cdn.indexcoop.com/21bch.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'bitcoin-cash',
      },
      tags: ['component'],
    },
    {
      address: '0x9c05d54645306d4C4EAd6f75846000E1554c0360',
      chainId: 1,
      name: '21.co Wrapped Cardano',
      symbol: '21ADA',
      decimals: 6,
      logoURI: 'https://cdn.indexcoop.com/21ada.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'cardano',
      },
      tags: ['component'],
    },
    {
      address: '0x9F2825333aa7bC2C98c061924871B6C016e385F3',
      chainId: 1,
      name: '21.co Wrapped Litecoin',
      symbol: '21LTC',
      decimals: 8,
      logoURI: 'https://cdn.indexcoop.com/21ltc.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'litecoin',
      },
      tags: ['component'],
    },
    {
      address: '0xF4ACCD20bFED4dFFe06d4C85A7f9924b1d5dA819',
      chainId: 1,
      name: '21.co Wrapped Polkadot',
      symbol: '21DOT',
      decimals: 10,
      logoURI: 'https://cdn.indexcoop.com/21dot.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'polkadot',
      },
      tags: ['component'],
    },
    {
      address: '0xb80a1d87654BEf7aD8eB6BBDa3d2309E31D4e598',
      chainId: 1,
      name: '21.co Wrapped Solana',
      symbol: '21SOL',
      decimals: 9,
      logoURI: 'https://cdn.indexcoop.com/21sol.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'solana',
      },
      tags: ['component'],
    },
    {
      address: '0x0d3bd40758dF4F79aaD316707FcB809CD4815Ffe',
      chainId: 1,
      name: '21.co Wrapped XRP',
      symbol: '21XRP',
      decimals: 6,
      logoURI: 'https://cdn.indexcoop.com/21xrp.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'ripple',
      },
      tags: ['component'],
    },
    {
      address: '0x399508A43d7E2b4451cd344633108b4d84b33B03',
      chainId: 1,
      name: '21.co Wrapped AVAX',
      symbol: '21AVAX',
      decimals: 18,
      logoURI: 'https://cdn.indexcoop.com/21avax.svg',
      extensions: {
        status: 'Deprecated',
        coingeckoId: 'avalanche-2',
      },
      tags: ['component'],
    },
    {
      address: '0x1c085195437738d73d75DC64bC5A3E098b7f93b1',
      chainId: 1,
      name: 'PT ether.fi weETH 26SEP2024',
      symbol: 'PT-weETH-26SEP2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x6ee2b5E19ECBa773a352E5B21415Dc419A700d1d',
      chainId: 1,
      name: 'PT ether.fi weETH 26DEC2024',
      symbol: 'PT-weETH-26DEC2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0xf7906F274c174A52d444175729E3fa98f9bde285',
      chainId: 1,
      name: 'PT Renzo ezETH 26DEC2024',
      symbol: 'PT-ezETH-26DEC2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x7aa68E84bCD8d1B4C9e10B1e565DB993f68a3E09',
      chainId: 1,
      name: 'PT Kelp Gain 26DEC2024',
      symbol: 'PT-agETH-26DEC2024',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/15069/large/Pendle_Logo_Normal-03.png?1696514728',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x12AFDeFb2237a5963e7BAb3e2D46ad0eee70406e',
      chainId: 8453,
      name: 'Re7 USDC',
      symbol: 'Re7USDC',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      address: '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0',
      chainId: 1,
      name: 'Re7 WETH',
      symbol: 'Re7WETH',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png',
      extensions: {
        status: null,
        coingeckoId: null,
      },
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8',
      name: 'Aave Ethereum WBTC',
      symbol: 'aEthWBTC',
      decimals: 8,
      extensions: {
        status: null,
        coingeckoId: 'aave-v3-wbtc',
      },
      logoURI: 'https://assets.coingecko.com/coins/images/32883/large/wbtc.png',
      tags: ['component'],
    },
    {
      address: '0x078f358208685046a11C85e8ad32895DED33A249',
      chainId: 42161,
      name: 'Aave Arbitrum WBTC',
      symbol: 'aArbWBTC',
      decimals: 8,
      extensions: {
        status: null,
        coingeckoId: 'aave-wbtc',
      },
      logoURI:
        'ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aWBTC.svg',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8',
      name: 'Aave Ethereum WETH',
      symbol: 'aEthWETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-v3-weth',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/32882/large/WETH_(1).png',
      tags: ['component'],
    },
    {
      address: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
      chainId: 42161,
      name: 'Aave Arbitrum WETH',
      symbol: 'aArbWETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-weth',
      },
      logoURI: 'ipfs://QmUDc7LQN6zKHon9FChTqZc7WGFvGPZe698Bq5HbSYtfk9',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xCc9EE9483f662091a1de4795249E24aC0aC2630f',
      name: 'Aave Ethereum rETH',
      symbol: 'aEthrETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-reth',
      },
      logoURI: 'https://assets.coingecko.com/coins/images/32885/large/reth.png',
      tags: ['component'],
    },
    {
      address: '0x724dc807b04555b71ed48a6896b6F41593b8C637',
      chainId: 42161,
      name: 'Aave Arbitrum USDCn',
      symbol: 'aArbUSDCn',
      decimals: 6,
      extensions: {
        status: null,
        coingeckoId: 'aave-usdc',
      },
      logoURI:
        'ipfs://QmaznB5PRhMC696u8yZuzN6Uwrnp7Zmfa5CydVUMvLJc9i/aUSDC.svg',
      tags: ['component'],
    },
    {
      address: '0xD4a0e0b9149BCee3C920d2E00b5dE09138fd8bb7',
      chainId: 8453,
      name: 'Aave Base WETH',
      symbol: 'aBasWETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave-weth',
      },
      logoURI: 'ipfs://QmUDc7LQN6zKHon9FChTqZc7WGFvGPZe698Bq5HbSYtfk9',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x1982b2F5814301d4e9a8b0201555376e62F82428',
      name: 'Aave Interest Bearing STETH',
      symbol: 'aSTETH',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/24163/small/steth.jpg?1646634315',
      extensions: {
        status: null,
        coingeckoId: 'staave-interest-bearing-stetheth',
      },
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E',
      name: 'Illuvium',
      symbol: 'ILV',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'illuvium',
      },
      logoURI: 'https://assets.coingecko.com/coins/images/14468/large/ILV.JPG',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
      name: 'Decentraland MANA',
      symbol: 'MANA',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'decentraland',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
      name: 'The Sandbox',
      symbol: 'SAND',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'the-sandbox',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF',
      name: 'Immutable X',
      symbol: 'IMX',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'immutable-x',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/17233/thumb/imx.png?1636691817',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
      name: 'ApeCoin',
      symbol: 'APE',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'apecoin',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE',
      name: 'Beam',
      symbol: 'BEAM',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'beam-2',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/32417/standard/chain-logo.png?1698114384',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24',
      name: 'Render Token',
      symbol: 'RNDR',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'render-token',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/11636/thumb/rndr.png?1638840934',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      name: 'yearn.finance',
      symbol: 'YFI',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'yearn-finance',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      name: 'Compound',
      symbol: 'COMP',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'compound-governance-token',
      },
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      name: 'Maker',
      symbol: 'MKR',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'maker',
      },
      logoURI:
        'https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      name: 'Uniswap',
      symbol: 'UNI',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'uniswap',
      },
      logoURI:
        'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      name: 'Aave Token',
      symbol: 'AAVE',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'aave',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/12467/thumb/ghst_200.png?1600750321',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
      name: 'Lido DAO Token',
      symbol: 'LDO',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'lido-dao',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/13573/thumb/Lido_DAO.png?1609873644',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xD33526068D116cE69F19A9ee46F0bd304F21A51f',
      name: 'Rocket Pool Protocol',
      symbol: 'RPL',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'rocket-pool',
      },
      logoURI:
        'https://tokens.1inch.io/0xb4efd85c19999d84251304bda99e90b92300bd93.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x808507121B80c02388fAd14726482e061B8da827',
      name: 'Pendle',
      symbol: 'PENDLE',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'pendle',
      },
      logoURI:
        'https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x57e114B691Db790C35207b2e685D4A43181e6061',
      name: 'Ethena',
      symbol: 'ENA',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'ethena',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/36530/standard/ethena.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      name: 'Matic Token',
      symbol: 'MATIC',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'matic-network',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'ChainLink Token',
      symbol: 'LINK',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'chainlink',
      },
      logoURI:
        'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xac3E018457B222d93114458476f3E3416Abbe38F',
      name: 'Staked Frax Ether',
      symbol: 'sfrxETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'staked-frax',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/28285/large/sfrxETH_icon.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38',
      name: 'StakeWise Staked ETH',
      symbol: 'osETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'stakewise-v3-oseth',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/33117/large/Frame_27513839.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xA35b1B31Ce002FBF2058D22F30f95D405200A15b',
      name: 'Stader ETHx',
      symbol: 'ETHx',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'stader',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/30870/large/staderx.png',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xf951E335afb289353dc249e82926178EaC7DEd78',
      name: 'Swell Ethereum',
      symbol: 'swETH',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'sweth',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/30326/large/_lB7zEtS_400x400.jpg',
      tags: ['component'],
    },
    {
      chainId: 1,
      address: '0xA0D3707c569ff8C87FA923d3823eC5D81c98Be78',
      name: 'Instadapp ETH v2',
      symbol: 'iETHv2',
      decimals: 18,
      extensions: {
        status: null,
        coingeckoId: 'instadapp-eth-v2',
      },
      logoURI: 'https://assets.coingecko.com/coins/images/29704/large/iETH.png',
      tags: ['component'],
    },
    // --------------- Currency Tokens ---------------
    {
      name: 'Dai Stablecoin',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      symbol: 'DAI',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'dai',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Dai Stablecoin',
      address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
      symbol: 'DAI',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/DAI/logo.svg',
      extensions: {
        status: 'Active',
        coingeckoId: 'dai',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'USDCoin',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      symbol: 'USDC',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
          },
          '42161': {
            tokenAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component', 'collateral'],
    },
    {
      name: 'USD Coin',
      address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      symbol: 'USDC',
      decimals: 6,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/USDC/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component', 'collateral'],
    },
    {
      name: 'USDCoin',
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      symbol: 'USDC',
      decimals: 6,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'usd-coin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          },
        },
      },
      tags: ['currency', 'stablecoin', 'component', 'collateral'],
    },
    {
      name: 'Tether USD',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      symbol: 'USDT',
      decimals: 6,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'tether',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
          },
          '42161': {
            tokenAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Bridged Tether USD',
      address: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
      symbol: 'USDT',
      decimals: 6,
      chainId: 8453,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'l2-standard-bridged-usdt-base',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          },
          '42161': {
            tokenAddress: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Tether USD',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      symbol: 'USD₮0',
      decimals: 6,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'tether',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          },
          '8453': {
            tokenAddress: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
          },
        },
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      name: 'Wrapped Ether',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      decimals: 18,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x4200000000000000000000000000000000000006',
          },
          '42161': {
            tokenAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          },
        },
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x4200000000000000000000000000000000000006',
      symbol: 'WETH',
      decimals: 18,
      chainId: 8453,
      logoURI: 'https://ethereum-optimism.github.io/data/WETH/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          },
        },
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      name: 'Wrapped Ether',
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      symbol: 'WETH',
      decimals: 18,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'weth',
        bridgeInfo: {
          '1': {
            tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          },
        },
      },
      tags: ['currency', 'component', 'underlying', 'collateral'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 1,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '8453': {
            tokenAddress: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
          },
          '42161': {
            tokenAddress: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
          },
        },
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 8453,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          },
        },
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      name: 'Wrapped BTC',
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      symbol: 'WBTC',
      decimals: 8,
      chainId: 42161,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-bitcoin',
        bridgeInfo: {
          '1': {
            tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          },
        },
      },
      tags: ['currency', 'component', 'underlying', 'collateral'],
    },
    {
      chainId: 1,
      address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
      name: 'Gemini Dollar',
      symbol: 'GUSD',
      decimals: 2,
      logoURI:
        'https://assets.coingecko.com/coins/images/5992/thumb/gemini-dollar-gusd.png?1536745278',
      extensions: {
        status: 'Active',
        coingeckoId: 'gemini-dollar',
      },
      tags: ['currency', 'stablecoin'],
    },
    {
      address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
      chainId: 1,
      name: 'Rocket Pool ETH',
      symbol: 'rETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'rocket-pool-eth',
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      chainId: 1,
      name: 'Lido Staked Ether',
      symbol: 'stETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'staked-ether',
      },
      tags: ['currency'],
    },
    {
      address: '0xFe2e637202056d30016725477c5da089Ab0A043A',
      chainId: 1,
      name: 'StakeWise Staked ETH2',
      symbol: 'sETH2',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0xfe2e637202056d30016725477c5da089ab0a043a.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'seth2',
      },
      tags: ['currency'],
    },
    {
      address: '0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55',
      chainId: 8453,
      name: 'Solana (Universal)',
      symbol: 'uSOL',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/39987/large/UA-SOL_1.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-solana-universal',
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      address: '0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4',
      chainId: 8453,
      name: 'Sui (Universal)',
      symbol: 'uSUI',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/50482/large/UA-SUI-PAD.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-sui-universal',
      },
      tags: ['currency', 'component', 'underlying'],
    },
    {
      address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      chainId: 1,
      name: 'Wrapped liquid staked Ether 2.0',
      symbol: 'wstETH',
      decimals: 18,
      logoURI:
        'https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-steth',
      },
      tags: ['currency', 'component'],
    },
    {
      address: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
      chainId: 8453,
      name: 'Wrapped liquid staked Ether 2.0',
      symbol: 'wstETH',
      decimals: 18,
      logoURI:
        'https://assets.coingecko.com/coins/images/18834/large/wstETH.png',
      extensions: {
        status: 'Active',
        coingeckoId: 'superbridge-bridged-wsteth-base',
      },
      tags: ['currency', 'component'],
    },
    {
      address: '0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE',
      name: 'XRP (Universal)',
      symbol: 'uXRP',
      decimals: 18,
      chainId: 8453,
      extensions: {
        status: 'Active',
        coingeckoId: 'wrapped-xrp-universal',
      },
      logoURI:
        'https://assets.coingecko.com/coins/images/51658/standard/UA-XRP_1.png?1731703523',
      tags: ['currency', 'component', 'underlying'],
    },
  ],
} as const;
