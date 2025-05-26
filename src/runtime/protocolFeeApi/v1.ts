import { DefinitionCall } from '@polkadot/types/types';

export const ProtocolFeeApiV1: Record<string, DefinitionCall> = {
  compute_fee: {
    description: 'Gets the fee of a chargeable extrinsic operation',
    params: [
      {
        name: 'op',
        type: 'ProtocolOp',
      },
    ],
    type: 'CappedFee',
  },
};
