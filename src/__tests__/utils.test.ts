import {getIndexTokenData, getIndexTokenDataByAddress} from '../utils';

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
