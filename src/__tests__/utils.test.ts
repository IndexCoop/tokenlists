import {getIndexTokenData} from '../utils';

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
