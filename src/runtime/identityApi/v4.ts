import { DefinitionCall } from '@polkadot/types/types';

export const IdentityApiV4: Record<string, DefinitionCall> = {
  is_identity_has_valid_cdd: {
    description: 'use to tell whether the given did has valid cdd claim or not',
    params: [
      { name: 'did', type: 'IdentityId' },
      { name: 'buffer_time', type: 'Option<u64>' },
    ],
    type: 'CddStatus',
  },
  get_did_records: {
    description: 'Used to get the did record values for a given DID',
    params: [{ name: 'did', type: 'IdentityId' }],
    type: 'RpcDidRecords',
  },
  get_did_status: {
    description: 'Retrieve status of the DID',
    params: [{ name: 'did', type: 'Vec<IdentityId>' }],
    type: 'Vec<DidStatus>',
  },
  get_filtered_authorizations: {
    description:
      'Retrieve authorizations data for a given signatory and filtered using the given authorization type',
    params: [
      { name: 'signatory', type: 'Signatory' },
      { name: 'allow_expired', type: 'bool' },
      { name: 'auth_type', type: 'Option<AuthorizationType>' },
    ],
    type: 'Vec<Authorization>',
  },
  get_key_identity_data: {
    description: 'Query relation between a signing key and a DID',
    params: [{ name: 'acc', type: 'AccountId' }],
    type: 'Option<KeyIdentityData>',
  },
  valid_cdd_claims: {
    description:
      'Returns all valid IdentityClaim of type CustomerDueDiligence for the given target_identity',
    params: [
      { name: 'target_identity', type: 'IdentityId' },
      { name: 'cdd_checker_leeway', type: 'Option<u64>' },
    ],
    type: 'Vec<IdentityClaim>',
  },
};
