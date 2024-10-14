import type { ChainId } from '@/src/types';
import { createClient, http, type Client } from 'viem';
import { mainnet, arbitrum, base } from 'viem/chains';

const alchemyId = Bun.env.ALCHEMY_ID;

if (!alchemyId) {
  throw new Error('ALCHEMY_ID is not set');
}

export const chains = [mainnet, arbitrum, base];

export const rpcUrls: Record<ChainId, string> = {
  [mainnet.id]: `https://eth-mainnet.g.alchemy.com/v2/${alchemyId}`,
  [arbitrum.id]: `https://arb-mainnet.g.alchemy.com/v2/${alchemyId}`,
  [base.id]: `https://base-mainnet.g.alchemy.com/v2/${alchemyId}`,
};

export const staticClients = Object.entries(rpcUrls).reduce(
  (acc, [chainId, url]) => {
    const client = createClient({
      batch: {
        multicall: true,
      },
      chain: chains.find((c) => c.id.toString() === chainId),
      transport: http(url),
    });

    return Object.assign(acc, { [chainId]: client });
  },
  {} as Record<ChainId, Client>,
);
