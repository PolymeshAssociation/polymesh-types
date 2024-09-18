import { DefinitionCall } from '@polkadot/types/types';

export const StakingApiV1: Record<string, DefinitionCall> = {
  get_curve: {
    description: 'Retrieves curves parameters',
    params: [],
    type: 'Vec<(Perbill, Perbill)>',
  },
};
