import { DefinitionCall } from '@polkadot/types/types';

export const AssetApiV5: Record<string, DefinitionCall> = {
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
        name: 'asset_id',
        type: 'PolymeshAssetId',
      },
      {
        name: 'transfer_value',
        type: 'Balance',
      },
      {
        name: 'skip_locked_check',
        type: 'bool',
      },
    ],
    type: 'Vec<DispatchError>',
  },
};
