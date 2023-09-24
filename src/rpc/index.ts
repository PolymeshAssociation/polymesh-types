export default {
  identity: {
    isIdentityHasValidCdd: {
      description: 'use to tell whether the given did has valid cdd claim or not',
      params: [
        {
          name: 'did',
          type: 'IdentityId',
          isOptional: false,
        },
        {
          name: 'buffer_time',
          type: 'u64',
          isOptional: true,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'CddStatus',
    },
    getAssetDid: {
      description: 'function is used to query the given ticker DID',
      params: [
        {
          name: 'ticker',
          type: 'Ticker',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'AssetDidResult',
    },
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
    validCDDClaims: {
      description:
        'Returns all valid IdentityClaim of type CustomerDueDiligence for the given target_identity',
      params: [
        {
          name: 'target_identity',
          type: 'IdentityId',
          isOptional: false,
        },
        {
          name: 'cdd_checker_leeway',
          type: 'u64',
          isOptional: true,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<IdentityClaim>',
    },
  },
  pips: {
    getVotes: {
      description: 'Summary of votes of a proposal given by index',
      params: [
        {
          name: 'index',
          type: 'PipId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'VoteCount',
    },
    proposedBy: {
      description: 'Retrieves proposal indices started by address',
      params: [
        {
          name: 'address',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<PipId>',
    },
    votedOn: {
      description: 'Retrieves proposal address indices voted on',
      params: [
        {
          name: 'address',
          type: 'AccountId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<PipId>',
    },
  },
  protocolFee: {
    computeFee: {
      description: 'Gets the fee of a chargeable extrinsic operation',
      params: [
        {
          name: 'op',
          type: 'ProtocolOp',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'CappedFee',
    },
  },
  staking: {
    getCurve: {
      description: 'Retrieves curves parameters',
      params: [
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<(Perbill, Perbill)>',
    },
  },
  asset: {
    canTransferGranular: {
      description:
        'Checks whether a transaction with given parameters can take place or not. The result is granular meaning each check is run and returned regardless of outcome.',
      params: [
        {
          name: 'from_custodian',
          type: 'Option<IdentityId>',
          isOptional: false,
        },
        {
          name: 'from_portfolio',
          type: 'PortfolioId',
          isOptional: false,
        },
        {
          name: 'to_custodian',
          type: 'Option<IdentityId>',
          isOptional: false,
        },
        {
          name: 'to_portfolio',
          type: 'PortfolioId',
          isOptional: false,
        },
        {
          name: 'ticker',
          type: 'Ticker',
          isOptional: false,
        },
        {
          name: 'value',
          type: 'Balance',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'CanTransferGranularReturn',
    },
  },
  group: {
    getCDDValidMembers: {
      description: 'Get the CDD members',
      params: [
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<Member>',
    },
    getGCValidMembers: {
      description: 'Get the GC members',
      params: [
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<Member>',
    },
  },
  nft: {
    validateNFTTransfer: {
      description:
        'Verifies if and the sender and receiver are not the same, if both have valid balances, if the sender owns the nft, and if all compliance rules are being respected.',
      params: [
        {
          name: 'sender_portfolio',
          type: 'PortfolioId',
          isOptional: false,
        },
        {
          name: 'receiver_portfolio',
          type: 'PortfolioId',
          isOptional: false,
        },
        {
          name: 'nfts',
          type: 'NFTs',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'DispatchResult',
    },
  },
  settlement: {
    getExecuteInstructionInfo: {
      description:
        'Returns an ExecuteInstructionInfo instance, containing the consumed weight and the number of tokens in the instruction.',
      params: [
        {
          name: 'instruction_id',
          type: 'InstructionId',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'ExecuteInstructionInfo',
    },
  },
};
