import type { ChainId } from '@/src/types';
import { createClient, http, type Client } from 'viem';
import { mainnet, arbitrum, base, polygon } from 'viem/chains';

const alchemyId =
  typeof Bun !== 'undefined' && Bun.env
    ? Bun.env.ALCHEMY_ID
    : process.env.ALCHEMY_ID;

if (!alchemyId) {
  throw new Error('ALCHEMY_ID is not set');
}

export const chains = [mainnet, arbitrum, base, polygon];

export const rpcUrls: Record<ChainId, string> = {
  [mainnet.id]: `https://eth-mainnet.g.alchemy.com/v2/${alchemyId}`,
  [arbitrum.id]: `https://arb-mainnet.g.alchemy.com/v2/${alchemyId}`,
  [base.id]: `https://base-mainnet.g.alchemy.com/v2/${alchemyId}`,
  [polygon.id]: `https://polygon-mainnet.g.alchemy.com/v2/${alchemyId}`,
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
