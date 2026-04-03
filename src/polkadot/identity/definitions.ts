export default {
  rpc: {
    getDidRecords: {
      description: 'Used to get the did record values for a given DID',
      params: [
        {
          name: 'did',
          type: 'IdentityId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'RpcDidRecords',
    },
    getDidStatus: {
      description: 'Retrieve status of the DID',
      params: [
        {
          name: 'did',
          type: 'Vec<IdentityId>',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<DidStatus>',
    },
    getFilteredAuthorizations: {
      description:
        'Retrieve authorizations data for a given signatory and filtered using the given authorization type',
      params: [
        {
          name: 'signatory',
          type: 'Signatory',
          isOptional: false,
        },
        {
          name: 'allow_expired',
          type: 'bool',
          isOptional: false,
        },
        {
          name: 'auth_type',
          type: 'AuthorizationType',
          isOptional: true,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<Authorization>',
    },
    getKeyIdentityData: {
      description: 'Query relation between a signing key and a DID',
      params: [
        {
          name: 'acc',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Option<KeyIdentityData>',
    },
  },
  types: {},
};
