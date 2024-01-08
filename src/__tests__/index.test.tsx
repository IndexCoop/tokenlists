import {
  TokenData,
  ArbitrumTokens,
  AvalancheTokens,
  MainnetTokens,
  IndexCoopMainnetTokens,
  MaticTokens,
  IndexCoopMaticTokens,
  OptimismTokens,
} from '../';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const findDuplicatesByAddress = (tokens: TokenData[]) => {
  const allAddresses = tokens.map(t => t.address.toLowerCase());
  const uniqAddresses = new Set(allAddresses);

  const duplicates = allAddresses.filter(a => {
    if (uniqAddresses.has(a)) {
      uniqAddresses.delete(a);
      return false;
    } else {
      return a;
    }
  });

  return duplicates;
};

const uniqueByAddress = (tokens: TokenData[]) =>
  Array.from(new Set(tokens.map(t => t.address.toLowerCase())));

describe('arent empty', () => {
  test('should add up positive numbers', async () => {
    expect(ArbitrumTokens.length).toBeGreaterThan(0);
    // expect(IndexCoopArbitrumTokens.length).toBeGreaterThan(0);

    expect(AvalancheTokens.length).toBeGreaterThan(0);
    // expect(IndexCoopAvalancheTokens.length).toBeGreaterThan(0);

    expect(MainnetTokens.length).toBeGreaterThan(0);
    expect(IndexCoopMainnetTokens.length).toBeGreaterThan(0);

    expect(MaticTokens.length).toBeGreaterThan(0);
    expect(IndexCoopMaticTokens.length).toBeGreaterThan(0);

    expect(OptimismTokens.length).toBeGreaterThan(0);
    // expect(IndexCoopOptimismTokens.length).toBeGreaterThan(0);
  });
});

describe('unique tokens', () => {
  test('should not have duplicates (checks on address)', () => {
    expect(ArbitrumTokens.length).toEqual(
      uniqueByAddress(ArbitrumTokens).length
    );
    // expect(IndexCoopArbitrumTokens.length).toEqual(uniqueByAddress(IndexCoopArbitrumTokens).length);

    expect(AvalancheTokens.length).toEqual(
      uniqueByAddress(AvalancheTokens).length
    );
    // expect(IndexCoopAvalancheTokens.length).toEqual(uniqueByAddress(IndexCoopAvalancheTokens).length);

    expect(MainnetTokens.length).toEqual(uniqueByAddress(MainnetTokens).length);
    expect(IndexCoopMainnetTokens.length).toEqual(
      uniqueByAddress(IndexCoopMainnetTokens).length
    );

    expect(MaticTokens.length).toEqual(uniqueByAddress(MaticTokens).length);
    expect(IndexCoopMaticTokens.length).toEqual(
      uniqueByAddress(IndexCoopMaticTokens).length
    );

    expect(OptimismTokens.length).toEqual(
      uniqueByAddress(OptimismTokens).length
    );
    // expect(IndexCoopOptimismTokens.length).toEqual(uniqueByAddress(IndexCoopOptimismTokens).length);
  });
});
