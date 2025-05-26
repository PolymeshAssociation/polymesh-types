import { DefinitionCall } from '@polkadot/types/types';

export const NFTApiV2: Record<string, DefinitionCall> = {
  transfer_report: {
    description:
      "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
    params: [
      {
        name: 'sender_portfolio',
        type: 'PortfolioId',
      },
      {
        name: 'receiver_portfolio',
        type: 'PortfolioId',
      },
      {
        name: 'nfts',
        type: 'NFTs',
      },
      {
        name: 'skip_locked_check',
        type: 'bool',
      },
    ],
    type: 'Vec<DispatchError>',
  },
};
