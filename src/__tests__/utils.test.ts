import {getIndexTokenData} from '../utils';

describe('getIndexTokenData', () => {
  test('returns token data', async () => {
    const data = getIndexTokenData('MVI');
    expect(data).not.toBeNull();
    expect(data?.symbol).toBe('MVI');
  });

  test('returns null for non mainnet', async () => {
    const data = getIndexTokenData('MVI', 11155111);
    expect(data).toBeNull();
  });

  test('returns null for non existent token', async () => {
    const data = getIndexTokenData('ETH');
    expect(data).toBeNull();
  });
});
