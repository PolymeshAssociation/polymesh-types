import { DefinitionCall } from '@polkadot/types/types';

export const PipsApiV1: Record<string, DefinitionCall> = {
  get_votes: {
    description: 'Summary of votes of a proposal given by index',
    params: [{ name: 'index', type: 'PipId' }],
    type: 'VoteCount',
  },
  proposed_by: {
    description: 'Retrieves proposal indices started by address',
    params: [{ name: 'address', type: 'AccountId' }],
    type: 'Vec<PipId>',
  },
  voted_on: {
    description: 'Retrieves proposal address indices voted on',
    params: [{ name: 'address', type: 'AccountId' }],
    type: 'Vec<PipId>',
  },
};
