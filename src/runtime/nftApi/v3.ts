import { DefinitionCall } from '@polkadot/types/types';

export const NFTApiV3: Record<string, DefinitionCall> = {
  transfer_report: {
    description:
      "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
    params: [
      {
        name: 'sender',
        type: 'AssetHolder',
      },
      {
        name: 'receiver',
        type: 'AssetHolder',
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
