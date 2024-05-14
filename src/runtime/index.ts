export default {
  AssetApi: [
    {
      methods: {
        can_transfer_granular: {
          description:
            'Checks whether a transaction with given parameters can take place or not. The result is granular meaning each check is run and returned regardless of outcome.',
          params: [
            {
              name: 'from_custodian',
              type: 'Option<IdentityId>',
            },
            {
              name: 'from_portfolio',
              type: 'PortfolioId',
            },
            {
              name: 'to_custodian',
              type: 'Option<IdentityId>',
            },
            {
              name: 'to_portfolio',
              type: 'PortfolioId',
            },
            {
              name: 'ticker',
              type: 'Ticker',
            },
            {
              name: 'value',
              type: 'Balance',
            },
          ],
          type: 'CanTransferGranularReturn',
        },
      },
      version: 3,
    },
  ],
  GroupApi: [
    {
      methods: {
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
      },
      version: 1,
    },
  ],
  IdentityApi: [
    {
      methods: {
        is_identity_has_valid_cdd: {
          description: 'use to tell whether the given did has valid cdd claim or not',
          params: [
            {
              name: 'did',
              type: 'IdentityId',
            },
            {
              name: 'buffer_time',
              type: 'Option<u64>',
            },
          ],
          type: 'CddStatus',
        },
        get_asset_did: {
          description: 'function is used to query the given ticker DID',
          params: [
            {
              name: 'ticker',
              type: 'Ticker',
            },
          ],
          type: 'AssetDidResult',
        },
        get_did_records: {
          description: 'Used to get the did record values for a given DID',
          params: [
            {
              name: 'did',
              type: 'IdentityId',
            },
          ],
          type: 'RpcDidRecords',
        },
        get_did_status: {
          description: 'Retrieve status of the DID',
          params: [
            {
              name: 'did',
              type: 'Vec<IdentityId>',
            },
          ],
          type: 'Vec<DidStatus>',
        },
        get_filtered_authorizations: {
          description:
            'Retrieve authorizations data for a given signatory and filtered using the given authorization type',
          params: [
            {
              name: 'signatory',
              type: 'Signatory',
            },
            {
              name: 'allow_expired',
              type: 'bool',
            },
            {
              name: 'auth_type',
              type: 'Option<AuthorizationType>',
            },
          ],
          type: 'Vec<Authorization>',
        },
        get_key_identity_data: {
          description: 'Query relation between a signing key and a DID',
          params: [
            {
              name: 'acc',
              type: 'AccountId',
            },
          ],
          type: 'Option<KeyIdentityData>',
        },
        valid_cdd_claims: {
          description:
            'Returns all valid IdentityClaim of type CustomerDueDiligence for the given target_identity',
          params: [
            {
              name: 'target_identity',
              type: 'IdentityId',
            },
            {
              name: 'cdd_checker_leeway',
              type: 'Option<u64>',
            },
          ],
          type: 'Vec<IdentityClaim>',
        },
      },
      version: 3,
    },
  ],
  NFTApi: [
    {
      methods: {
        validate_nft_transfer: {
          description:
            'Verifies if and the sender and receiver are not the same, if both have valid balances, if the sender owns the nft, and if all compliance rules are being respected.',
          params: [
            {
              name: 'sender_portfolio',
              type: 'PortfolioId',
            },
            {
              name: 'receiver_portfolio',
              type: 'PortfolioId',
            },
            {
              name: 'nfts',
              type: 'NFTs',
            },
          ],
          type: 'DispatchResult',
        },
      },
      version: 1,
    },
  ],
  SettlementApi: [
    {
      methods: {
        get_execute_instruction_info: {
          description:
            'Returns an ExecuteInstructionInfo instance containing the consumed weight and the number of tokens in the instruction.',
          params: [
            {
              name: 'instruction_id',
              type: 'InstructionId',
            },
          ],
          type: 'ExecuteInstructionInfo',
        },
        get_affirmation_count: {
          description:
            'Returns an AffirmationCount instance containing the number of assets being sent/received from portfolios, and the number of off-chain assets in the instruction.',
          params: [
            {
              name: 'instruction_id',
              type: 'InstructionId',
            },
            {
              name: 'portfolios',
              type: 'Vec<PortfolioId>',
            },
          ],
          type: 'AffirmationCount',
        },
        get_transfer_report: {
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
        get_execute_instruction_report: {
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
      },
      version: 1,
    },
  ],
  PipsApi: [
    {
      methods: {
        get_votes: {
          description: 'Summary of votes of a proposal given by index',
          params: [
            {
              name: 'index',
              type: 'PipId',
            },
          ],
          type: 'VoteCount',
        },
        proposed_by: {
          description: 'Retrieves proposal indices started by address',
          params: [
            {
              name: 'address',
              type: 'AccountId',
            },
          ],
          type: 'Vec<PipId>',
        },
        voted_on: {
          description: 'Retrieves proposal address indices voted on',
          params: [
            {
              name: 'address',
              type: 'AccountId',
            },
          ],
          type: 'Vec<PipId>',
        },
      },
      version: 1,
    },
  ],
  ProtocolFeeApi: [
    {
      methods: {
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
      },
      version: 1,
    },
  ],
  StakingApi: [
    {
      methods: {
        get_curve: {
          description: 'Retrieves curves parameters',
          params: [],
          type: 'Vec<(Perbill, Perbill)>',
        },
      },
      version: 1,
    },
  ],
  ComplianceApi: [
    {
      methods: {
        compliance_report: {
          description: 'Checks all compliance requirements for the given ticker.',
          params: [
            {
              name: 'ticker',
              type: 'Ticker',
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
      version: 1,
    },
  ],
};
