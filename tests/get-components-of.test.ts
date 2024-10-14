import * as fc from 'fast-check';
import { productTokenArbitrary } from './utils';
import { getComponentsOf } from '../src';
import { rpcUrls } from '@/config/networks';

describe('getComponentsOf', () => {
  it('should accept any value but return an empty array for it', () => {
    fc.assert(
      fc.asyncProperty(fc.anything(), async (anyVal) => {
        const result = await getComponentsOf(rpcUrls, anyVal);
        expect(result).toEqual([]);
      }),
    );
  });

  it('should return all component tokens fromtokens for a valid chainId', () => {
    fc.assert(
      fc.asyncProperty(productTokenArbitrary, async (productToken) => {
        const result = await getComponentsOf(rpcUrls, productToken);
        const allDefined = result.every((token) => Boolean(token));
        expect(allDefined).toBeTruthy();
      }),
    );
  });
});
