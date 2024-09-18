import { DefinitionCall } from '@polkadot/types/types';

export const GroupApiV1: Record<string, DefinitionCall> = {
  get_cdd_valid_members: {
    description: 'Get the CDD members',
    params: [],
    type: 'Vec<Member>',
  },
  get_gc_valid_members: {
    description: 'Get the GC members',
    params: [],
    type: 'Vec<Member>',
  },
};
