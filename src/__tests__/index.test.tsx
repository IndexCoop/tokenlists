import {MainnetTokens, MaticTokens, IndexCoopMaticTokens} from '../index';

describe('arent empty', () => {
  test('should add up positive numbers', async () => {
    expect(MainnetTokens.length).toBeGreaterThan(0);
    expect(MaticTokens.length).toBeGreaterThan(0);
    expect(IndexCoopMaticTokens.length).toBeGreaterThan(0);
  });
});
