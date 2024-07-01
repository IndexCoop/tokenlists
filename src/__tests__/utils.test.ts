import {
  getIndexTokenData,
  getIndexTokenDataByAddress,
  getTokenData,
  getTokenDataByAddress,
} from '../utils';

describe('getIndexTokenData', () => {
  test('returns token data for mainnet', async () => {
    const data = getIndexTokenData('MVI');
    expect(data).not.toBeNull();
    expect(data?.symbol).toBe('MVI');
  });

  test('returns token data for arbitrum', async () => {
    const data = getIndexTokenData('ETH2X', 42161);
    expect(data).not.toBeNull();
    expect(data?.address).toBe('0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C');
    expect(data?.symbol).toBe('ETH2X');
  });

  test('returns null for an unsupported chain', async () => {
    const data = getIndexTokenData('MVI', 11155111);
    expect(data).toBeNull();
  });

  test('returns null for non existent token', async () => {
    const data = getIndexTokenData('ETH');
    expect(data).toBeNull();
  });
});

describe('getIndexTokenDataByAddress', () => {
  test('returns token data for mainnet', async () => {
    const data = getIndexTokenDataByAddress(
      '0xc4506022fb8090774e8a628d5084eed61d9b99ee',
      1
    );
    expect(data).not.toBeNull();
    expect(data?.symbol).toBe('hyETH');
  });

  test('returns token data for arbitrum', async () => {
    const data = getIndexTokenDataByAddress(
      '0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C',
      42161
    );
    expect(data).not.toBeNull();
    expect(data?.address).toBe('0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C');
    expect(data?.symbol).toBe('ETH2X');
  });

  test('returns null for an unsupported chain', async () => {
    const data = getIndexTokenData(
      '0x26d7D3728C6bb762a5043a1d0CeF660988Bca43C',
      11155111
    );
    expect(data).toBeNull();
  });

  test('returns null for non existent token', async () => {
    const data = getIndexTokenDataByAddress(
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      1
    );
    expect(data).toBeNull();
  });
});

describe('getTokenData', () => {
  test('returns token data for mainnet', async () => {
    const data = getTokenData('USDC', 1);
    expect(data).not.toBeNull();
    expect(data?.address).toEqual('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
    expect(data?.decimals).toEqual(6);
    expect(data?.symbol).toEqual('USDC');
  });

  test('returns token data for arbitrum', async () => {
    const data = getTokenData('USDC', 42161);
    expect(data).not.toBeNull();
    expect(data?.address).toEqual('0xaf88d065e77c8cC2239327C5EDb3A432268e5831');
    expect(data?.decimals).toEqual(6);
    expect(data?.symbol).toEqual('USDC');
  });

  test('returns null for an unsupported chain', async () => {
    const data = getTokenData('USDC', 11155111);
    expect(data).toBeNull();
  });

  test('returns null for non existent token', async () => {
    const data = getTokenData('EURO', 1);
    expect(data).toBeNull();
  });
});

describe('getTokenDataByAddress', () => {
  test('returns token data for mainnet', async () => {
    const data = getTokenDataByAddress(
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      1
    );
    expect(data).not.toBeNull();
    expect(data?.address).toEqual('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
    expect(data?.decimals).toEqual(6);
    expect(data?.symbol).toEqual('USDC');
  });

  test('returns token data for arbitrum', async () => {
    const data = getTokenDataByAddress(
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      42161
    );
    expect(data).not.toBeNull();
    expect(data?.address).toEqual('0xaf88d065e77c8cC2239327C5EDb3A432268e5831');
    expect(data?.decimals).toEqual(6);
    expect(data?.symbol).toEqual('USDC');
  });

  test('returns null for an unsupported chain', async () => {
    const data = getTokenDataByAddress(
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      11155111
    );
    expect(data).toBeNull();
  });

  test('returns null for non existent token', async () => {
    const data = getTokenDataByAddress(
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      1
    );
    expect(data).toBeNull();
  });
});
