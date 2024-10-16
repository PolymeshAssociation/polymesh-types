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
    transferReport: {
      description:
        "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
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
          name: 'asset_id',
          type: 'AssetId',
          isOptional: false,
        },
        {
          name: 'transfer_value',
          type: 'Balance',
          isOptional: false,
        },
        {
          name: 'skip_locked_check',
          type: 'bool',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<DispatchError>',
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
    transferReport: {
      description:
        "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
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
          name: 'skip_locked_check',
          type: 'bool',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<DispatchError>',
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
      type: 'Option<ExecuteInstructionInfo>',
    },
    getAffirmationCount: {
      description:
        'Returns an instance of AffirmationCount, which holds the asset count for both the sender and receiver and the number of offchain assets in the instruction',
      params: [
        {
          name: 'instruction_id',
          type: 'InstructionId',
          isOptional: false,
        },
        {
          name: 'portfolios',
          type: 'Vec<PortfolioId>',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'AffirmationCount',
    },
    getExecuteInstructionReport: {
      description:
        "Returns a vector containing all errors for the execution. An empty vec means there's no error.",
      params: [
        {
          name: 'instruction_id',
          type: 'InstructionId',
        },
      ],
      type: 'Vec<DispatchError>',
    },
    getTransferReport: {
      description:
        "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
      params: [
        {
          name: 'leg',
          type: 'Leg',
        },
        {
          name: 'skip_locked_check',
          type: 'bool',
        },
      ],
      type: 'Vec<DispatchError>',
    },
  },
  compliance: {
    complianceReport: {
      description: 'Checks all compliance requirements for the given asset.',
      params: [
        {
          name: 'asset_id',
          type: 'AssetId',
        },
        {
          name: 'sender_identity',
          type: 'IdentityId',
        },
        {
          name: 'receiver_identity',
          type: 'IdentityId',
        },
      ],
      type: 'Result<ComplianceReport, DispatchError>',
    },
  },
};
