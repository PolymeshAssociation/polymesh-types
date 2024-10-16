import { DefinitionCall } from '@polkadot/types/types';

export const StatisticsApiV0: Record<string, DefinitionCall> = {
  transfer_restrictions_report: {
    description:
      "Returns a vector containing all TransferCondition that are not being respected for the transfer. An empty vec means there's no error.",
    params: [
      {
        name: 'asset_id',
        type: 'AssetId',
      },
      {
        name: 'sender_did',
        type: 'IdentityId',
      },
      {
        name: 'receiver_did',
        type: 'IdentityId',
      },
      {
        name: 'transfer_amount',
        type: 'Balance',
      },
    ],
    type: 'Result<Vec<TransferCondition>, DispatchError>',
  },
};
