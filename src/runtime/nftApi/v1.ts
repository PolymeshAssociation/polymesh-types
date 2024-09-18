import { DefinitionCall } from '@polkadot/types/types';

export const NftApiV1: Record<string, DefinitionCall> = {
  validate_nft_transfer: {
    description:
      'Verifies if and the sender and receiver are not the same, if both have valid balances, if the sender owns the nft, and if all compliance rules are being respected.',
    params: [
      { name: 'sender_portfolio', type: 'PortfolioId' },
      { name: 'receiver_portfolio', type: 'PortfolioId' },
      { name: 'nfts', type: 'NFTs' },
    ],
    type: 'DispatchResult',
  },
};
