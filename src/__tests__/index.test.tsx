import {MainnetTokens, MaticTokens} from '../index';

describe('arent empty', () => {
  test('should add up positive numbers', async () => {
    expect(MainnetTokens.length).toBeGreaterThan(0);
    expect(MaticTokens.length).toBeGreaterThan(0);
  });
});
