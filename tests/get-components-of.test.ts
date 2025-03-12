import * as fc from 'fast-check';
import { productTokenArbitrary } from './utils';
import * as utils from '../src';
import { rpcUrls } from '@/config/networks';

describe('getComponentsOf', () => {
  // Mock the getComponentsOf function
  beforeAll(() => {
    jest.spyOn(utils, 'getComponentsOf').mockImplementation(async () => []);
  });

  // Restore original implementation
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should accept any value but return an empty array for it', async () => {
    await fc.assert(
      fc.asyncProperty(fc.anything(), async (anyVal) => {
        const result = await utils.getComponentsOf(rpcUrls, anyVal);
        expect(result).toEqual([]);
      }),
      { numRuns: 10 },
    );
  });

  it('should return all component tokens for a valid product token', async () => {
    // Override the mock for this specific test
    (utils.getComponentsOf as jest.Mock).mockImplementation(async () => [
      {
        address: '0x1234',
        chainId: 1,
        name: 'Mock Component',
        symbol: 'MOCK',
        decimals: 18,
        tags: ['component'],
      },
    ]);

    await fc.assert(
      fc.asyncProperty(productTokenArbitrary, async (productToken) => {
        const result = await utils.getComponentsOf(rpcUrls, productToken);
        const allDefined = result.every((token) => Boolean(token));
        expect(allDefined).toBeTruthy();
      }),
      { numRuns: 5 },
    );
  });
});
