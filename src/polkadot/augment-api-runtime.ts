// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type {
  AffirmationCount,
  AssetCount,
  Authorization,
  AuthorizationType,
  CappedFee,
  CddStatus,
  ComplianceReport,
  DidStatus,
  ExecuteInstructionInfo,
  IdentityClaim,
  IdentityId,
  InstructionId,
  KeyIdentityData,
  Leg,
  Member,
  NFTs,
  PipId,
  PolymeshAssetId,
  PortfolioId,
  ProtocolOp,
  RpcDidRecords,
  Signatory,
  TransferCondition,
  VoteCount,
} from './polymesh';
import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Vec, bool, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type {
  BabeEquivocationProof,
  BabeGenesisConfiguration,
  Epoch,
  OpaqueKeyOwnershipProof,
} from '@polkadot/types/interfaces/babe';
import type { CheckInherentsResult, InherentData } from '@polkadot/types/interfaces/blockbuilder';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type {
  CodeSource,
  CodeUploadResult,
  ContractExecResult,
  ContractInstantiateResult,
} from '@polkadot/types/interfaces/contracts';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { GenesisBuildErr } from '@polkadot/types/interfaces/genesisBuilder';
import type {
  AuthorityList,
  GrandpaEquivocationProof,
  SetId,
} from '@polkadot/types/interfaces/grandpa';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type {
  AccountId,
  Balance,
  Block,
  Call,
  ExtrinsicInclusionMode,
  Header,
  Index,
  KeyTypeId,
  Perbill,
  Slot,
  Weight,
  WeightV2,
} from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { ApplyExtrinsicResult, DispatchError } from '@polkadot/types/interfaces/system';
import type { TransactionSource, TransactionValidity } from '@polkadot/types/interfaces/txqueue';
import type { IExtrinsic, Observable } from '@polkadot/types/types';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module '@polkadot/api-base/types/calls' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/1 */
    accountNonceApi: {
      /**
       * The API to query account nonce (aka transaction index)
       **/
      accountNonce: AugmentedCall<
        ApiType,
        (accountId: AccountId | string | Uint8Array) => Observable<Index>
      >;
    };
    /** 0xbb6ba9053c5c9d78/4 */
    assetApi: {
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.
       **/
      transferReport: AugmentedCall<
        ApiType,
        (
          sender_portfolio: PortfolioId | { did?: any; kind?: any } | string | Uint8Array,
          receiver_portfolio: PortfolioId | { did?: any; kind?: any } | string | Uint8Array,
          asset_id: PolymeshAssetId | string | Uint8Array,
          transfer_value: Balance | AnyNumber | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<DispatchError>>
      >;
    };
    /** 0x687ad44ad37f03c2/1 */
    authorityDiscoveryApi: {
      /**
       * Retrieve authority identifiers of the current and next authority set.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<AuthorityId>>>;
    };
    /** 0xcbca25e39f142387/2 */
    babeApi: {
      /**
       * Return the genesis configuration for BABE. The configuration is only read on genesis.
       **/
      configuration: AugmentedCall<ApiType, () => Observable<BabeGenesisConfiguration>>;
      /**
       * Returns information regarding the current epoch.
       **/
      currentEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Returns the slot that started the current epoch.
       **/
      currentEpochStart: AugmentedCall<ApiType, () => Observable<Slot>>;
      /**
       * Generates a proof of key ownership for the given authority in the current epoch.
       **/
      generateKeyOwnershipProof: AugmentedCall<
        ApiType,
        (
          slot: Slot | AnyNumber | Uint8Array,
          authorityId: AuthorityId | string | Uint8Array
        ) => Observable<Option<OpaqueKeyOwnershipProof>>
      >;
      /**
       * Returns information regarding the next epoch (which was already previously announced).
       **/
      nextEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<
        ApiType,
        (
          equivocationProof:
            | BabeEquivocationProof
            | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any }
            | string
            | Uint8Array,
          keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array
        ) => Observable<Option<Null>>
      >;
    };
    /** 0x40fe3ad401f8959a/6 */
    blockBuilder: {
      /**
       * Apply the given extrinsic.
       **/
      applyExtrinsic: AugmentedCall<
        ApiType,
        (
          extrinsic: Extrinsic | IExtrinsic | string | Uint8Array
        ) => Observable<ApplyExtrinsicResult>
      >;
      /**
       * Check that the inherents are valid.
       **/
      checkInherents: AugmentedCall<
        ApiType,
        (
          block: Block | { header?: any; extrinsics?: any } | string | Uint8Array,
          data: InherentData | { data?: any } | string | Uint8Array
        ) => Observable<CheckInherentsResult>
      >;
      /**
       * Finish the current block.
       **/
      finalizeBlock: AugmentedCall<ApiType, () => Observable<Header>>;
      /**
       * Generate inherent extrinsics.
       **/
      inherentExtrinsics: AugmentedCall<
        ApiType,
        (
          inherent: InherentData | { data?: any } | string | Uint8Array
        ) => Observable<Vec<Extrinsic>>
      >;
    };
    /** 0x98cf18c375950e1f/2 */
    complianceApi: {
      /**
       * Checks all compliance requirements for the given asset_id.
       **/
      complianceReport: AugmentedCall<
        ApiType,
        (
          asset_id: PolymeshAssetId | string | Uint8Array,
          sender_identity: IdentityId | string | Uint8Array,
          receiver_identity: IdentityId | string | Uint8Array
        ) => Observable<Result<ComplianceReport, DispatchError>>
      >;
    };
    /** 0x68b66ba122c93fa7/2 */
    contractsApi: {
      /**
       * Perform a call from a specified account to a given contract.
       **/
      call: AugmentedCall<
        ApiType,
        (
          origin: AccountId | string | Uint8Array,
          dest: AccountId | string | Uint8Array,
          value: Balance | AnyNumber | Uint8Array,
          gasLimit:
            | Option<WeightV2>
            | null
            | Uint8Array
            | WeightV2
            | { refTime?: any; proofSize?: any }
            | string,
          storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber,
          inputData: Bytes | string | Uint8Array
        ) => Observable<ContractExecResult>
      >;
      /**
       * Query a given storage key in a given contract.
       **/
      getStorage: AugmentedCall<
        ApiType,
        (
          address: AccountId | string | Uint8Array,
          key: Bytes | string | Uint8Array
        ) => Observable<Option<Bytes>>
      >;
      /**
       * Instantiate a new contract.
       **/
      instantiate: AugmentedCall<
        ApiType,
        (
          origin: AccountId | string | Uint8Array,
          value: Balance | AnyNumber | Uint8Array,
          gasLimit:
            | Option<WeightV2>
            | null
            | Uint8Array
            | WeightV2
            | { refTime?: any; proofSize?: any }
            | string,
          storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber,
          code: CodeSource | { Upload: any } | { Existing: any } | string | Uint8Array,
          data: Bytes | string | Uint8Array,
          salt: Bytes | string | Uint8Array
        ) => Observable<ContractInstantiateResult>
      >;
      /**
       * Upload new code without instantiating a contract from it.
       **/
      uploadCode: AugmentedCall<
        ApiType,
        (
          origin: AccountId | string | Uint8Array,
          code: Bytes | string | Uint8Array,
          storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber
        ) => Observable<CodeUploadResult>
      >;
    };
    /** 0xdf6acb689907609b/5 */
    core: {
      /**
       * Execute the given block.
       **/
      executeBlock: AugmentedCall<
        ApiType,
        (
          block: Block | { header?: any; extrinsics?: any } | string | Uint8Array
        ) => Observable<Null>
      >;
      /**
       * Initialize a block with the given header.
       **/
      initializeBlock: AugmentedCall<
        ApiType,
        (
          header:
            | Header
            | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
              }
            | string
            | Uint8Array
        ) => Observable<ExtrinsicInclusionMode>
      >;
      /**
       * Returns the version of the runtime.
       **/
      version: AugmentedCall<ApiType, () => Observable<RuntimeVersion>>;
    };
    /** 0xfbc577b9d747efd6/1 */
    genesisBuilder: {
      /**
       * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the storage.
       **/
      buildConfig: AugmentedCall<
        ApiType,
        (json: Bytes | string | Uint8Array) => Observable<Result<ITuple<[]>, GenesisBuildErr>>
      >;
      /**
       * Creates the default `RuntimeGenesisConfig` and returns it as a JSON blob.
       **/
      createDefaultConfig: AugmentedCall<ApiType, () => Observable<Bytes>>;
    };
    /** 0xed99c5acb25eedf5/3 */
    grandpaApi: {
      /**
       * Get current GRANDPA authority set id.
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<SetId>>;
      /**
       * Generates a proof of key ownership for the given authority in the given set.
       **/
      generateKeyOwnershipProof: AugmentedCall<
        ApiType,
        (
          setId: SetId | AnyNumber | Uint8Array,
          authorityId: AuthorityId | string | Uint8Array
        ) => Observable<Option<OpaqueKeyOwnershipProof>>
      >;
      /**
       * Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.
       **/
      grandpaAuthorities: AugmentedCall<ApiType, () => Observable<AuthorityList>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<
        ApiType,
        (
          equivocationProof:
            | GrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array
        ) => Observable<Option<Null>>
      >;
    };
    /** 0x595ac34c5ea1f5fe/1 */
    groupApi: {
      /**
       * Get the CDD members
       **/
      getCddValidMembers: AugmentedCall<ApiType, () => Observable<Vec<Member>>>;
      /**
       * Get the GC members
       **/
      getGcValidMembers: AugmentedCall<ApiType, () => Observable<Vec<Member>>>;
    };
    /** 0xf28e8080b6e2dfd0/4 */
    identityApi: {
      /**
       * Used to get the did record values for a given DID
       **/
      getDidRecords: AugmentedCall<
        ApiType,
        (did: IdentityId | string | Uint8Array) => Observable<RpcDidRecords>
      >;
      /**
       * Retrieve status of the DID
       **/
      getDidStatus: AugmentedCall<
        ApiType,
        (did: Vec<IdentityId> | (IdentityId | string | Uint8Array)[]) => Observable<Vec<DidStatus>>
      >;
      /**
       * Retrieve authorizations data for a given signatory and filtered using the given authorization type
       **/
      getFilteredAuthorizations: AugmentedCall<
        ApiType,
        (
          signatory: Signatory | { Identity: any } | { Account: any } | string | Uint8Array,
          allow_expired: bool | boolean | Uint8Array,
          auth_type:
            | Option<AuthorizationType>
            | null
            | Uint8Array
            | AuthorizationType
            | 'AttestPrimaryKeyRotation'
            | 'RotatePrimaryKey'
            | 'TransferTicker'
            | 'AddMultiSigSigner'
            | 'TransferAssetOwnership'
            | 'JoinIdentity'
            | 'PortfolioCustody'
            | 'BecomeAgent'
            | 'AddRelayerPayingKey'
            | 'RotatePrimaryKeyToSecondary'
            | number
        ) => Observable<Vec<Authorization>>
      >;
      /**
       * Query relation between a signing key and a DID
       **/
      getKeyIdentityData: AugmentedCall<
        ApiType,
        (acc: AccountId | string | Uint8Array) => Observable<Option<KeyIdentityData>>
      >;
      /**
       * use to tell whether the given did has valid cdd claim or not
       **/
      isIdentityHasValidCdd: AugmentedCall<
        ApiType,
        (
          did: IdentityId | string | Uint8Array,
          buffer_time: Option<u64> | null | Uint8Array | u64 | AnyNumber
        ) => Observable<CddStatus>
      >;
      /**
       * Returns all valid IdentityClaim of type CustomerDueDiligence for the given target_identity
       **/
      validCddClaims: AugmentedCall<
        ApiType,
        (
          target_identity: IdentityId | string | Uint8Array,
          cdd_checker_leeway: Option<u64> | null | Uint8Array | u64 | AnyNumber
        ) => Observable<Vec<IdentityClaim>>
      >;
    };
    /** 0x37e397fc7c91f5e4/2 */
    metadata: {
      /**
       * Returns the metadata of a runtime
       **/
      metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
      /**
       * Returns the metadata at a given version.
       **/
      metadataAtVersion: AugmentedCall<
        ApiType,
        (version: u32 | AnyNumber | Uint8Array) => Observable<Option<OpaqueMetadata>>
      >;
      /**
       * Returns the supported metadata versions.
       **/
      metadataVersions: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
    };
    /** 0x9ea061a615cee2fe/2 */
    nftApi: {
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.
       **/
      transferReport: AugmentedCall<
        ApiType,
        (
          sender_portfolio: PortfolioId | { did?: any; kind?: any } | string | Uint8Array,
          receiver_portfolio: PortfolioId | { did?: any; kind?: any } | string | Uint8Array,
          nfts: NFTs | { assetId?: any; ids?: any } | string | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<DispatchError>>
      >;
    };
    /** 0xf78b278be53f454c/2 */
    offchainWorkerApi: {
      /**
       * Starts the off-chain task for given block header.
       **/
      offchainWorker: AugmentedCall<
        ApiType,
        (
          header:
            | Header
            | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
              }
            | string
            | Uint8Array
        ) => Observable<Null>
      >;
    };
    /** 0x329342994773047f/1 */
    pipsApi: {
      /**
       * Summary of votes of a proposal given by index
       **/
      getVotes: AugmentedCall<
        ApiType,
        (index: PipId | AnyNumber | Uint8Array) => Observable<VoteCount>
      >;
      /**
       * Retrieves proposal indices started by address
       **/
      proposedBy: AugmentedCall<
        ApiType,
        (address: AccountId | string | Uint8Array) => Observable<Vec<PipId>>
      >;
      /**
       * Retrieves proposal address indices voted on
       **/
      votedOn: AugmentedCall<
        ApiType,
        (address: AccountId | string | Uint8Array) => Observable<Vec<PipId>>
      >;
    };
    /** 0x001a0b29f17d01f4/1 */
    protocolFeeApi: {
      /**
       * Gets the fee of a chargeable extrinsic operation
       **/
      computeFee: AugmentedCall<
        ApiType,
        (
          op:
            | ProtocolOp
            | 'AssetRegisterTicker'
            | 'AssetIssue'
            | 'AssetAddDocuments'
            | 'AssetCreateAsset'
            | 'CheckpointCreateSchedule'
            | 'ComplianceManagerAddComplianceRequirement'
            | 'IdentityCddRegisterDid'
            | 'IdentityAddClaim'
            | 'IdentityAddSecondaryKeysWithAuthorization'
            | 'PipsPropose'
            | 'ContractsPutCode'
            | 'CorporateBallotAttachBallot'
            | 'CapitalDistributionDistribute'
            | 'NFTCreateCollection'
            | 'NFTMint'
            | 'IdentityCreateChildIdentity'
            | number
            | Uint8Array
        ) => Observable<CappedFee>
      >;
    };
    /** 0xab3c0572291feb8b/1 */
    sessionKeys: {
      /**
       * Decode the given public session keys.
       **/
      decodeSessionKeys: AugmentedCall<
        ApiType,
        (
          encoded: Bytes | string | Uint8Array
        ) => Observable<Option<Vec<ITuple<[Bytes, KeyTypeId]>>>>
      >;
      /**
       * Generate a set of session keys with optionally using the given seed.
       **/
      generateSessionKeys: AugmentedCall<
        ApiType,
        (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>
      >;
    };
    /** 0x53df5001418f3b46/2 */
    settlementApi: {
      /**
       * Returns an AffirmationCount instance containing the number of assets being sent/received from portfolios, and the number of off-chain assets in the instruction.
       **/
      getAffirmationCount: AugmentedCall<
        ApiType,
        (
          instruction_id: InstructionId | AnyNumber | Uint8Array,
          portfolios:
            | Vec<PortfolioId>
            | (PortfolioId | { did?: any; kind?: any } | string | Uint8Array)[]
        ) => Observable<AffirmationCount>
      >;
      /**
       * Returns an ExecuteInstructionInfo instance containing the consumed weight and the number of tokens in the instruction.
       **/
      getExecuteInstructionInfo: AugmentedCall<
        ApiType,
        (
          instruction_id: InstructionId | AnyNumber | Uint8Array
        ) => Observable<Option<ExecuteInstructionInfo>>
      >;
      /**
       * Returns a vector containing all errors for the execution. An empty vec means there's no error.
       **/
      getExecuteInstructionReport: AugmentedCall<
        ApiType,
        (instruction_id: InstructionId | AnyNumber | Uint8Array) => Observable<Vec<DispatchError>>
      >;
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.
       **/
      getTransferReport: AugmentedCall<
        ApiType,
        (
          leg:
            | Leg
            | { Fungible: any }
            | { NonFungible: any }
            | { OffChain: any }
            | string
            | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<DispatchError>>
      >;
      /**
       * Returns the AssetCount for the given instruction.
       **/
      instructionAssetCount: AugmentedCall<
        ApiType,
        (instruction_id: InstructionId | AnyNumber | Uint8Array) => Observable<AssetCount>
      >;
      /**
       * Returns the weight for executing lock_instruction.
       **/
      lockInstructionWeight: AugmentedCall<
        ApiType,
        (
          instruction_id: InstructionId | AnyNumber | Uint8Array
        ) => Observable<Result<Weight, DispatchError>>
      >;
    };
    /** 0x18ef58a3b67ba770/1 */
    stakingApi: {
      /**
       * Retrieves curves parameters
       **/
      getCurve: AugmentedCall<ApiType, () => Observable<Vec<ITuple<[Perbill, Perbill]>>>>;
      /**
       * Returns the nominations quota for a nominator with a given balance.
       **/
      nominationsQuota: AugmentedCall<
        ApiType,
        (balance: Balance | AnyNumber | Uint8Array) => Observable<u32>
      >;
    };
    /** 0x608339ce0e76adf3/0 */
    statisticsApi: {
      /**
       * Returns a vector containing all TransferCondition that are not being respected for the transfer. An empty vec means there's no error.
       **/
      transferRestrictionsReport: AugmentedCall<
        ApiType,
        (
          asset_id: PolymeshAssetId | string | Uint8Array,
          sender_did: IdentityId | string | Uint8Array,
          receiver_did: IdentityId | string | Uint8Array,
          transfer_amount: Balance | AnyNumber | Uint8Array
        ) => Observable<Result<Vec<TransferCondition>, DispatchError>>
      >;
    };
    /** 0xd2bc9897eed08f15/3 */
    taggedTransactionQueue: {
      /**
       * Validate the transaction.
       **/
      validateTransaction: AugmentedCall<
        ApiType,
        (
          source: TransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array,
          tx: Extrinsic | IExtrinsic | string | Uint8Array,
          blockHash: BlockHash | string | Uint8Array
        ) => Observable<TransactionValidity>
      >;
    };
    /** 0x37c8bb1350a9a2a8/2 */
    transactionPaymentApi: {
      /**
       * The transaction fee details
       **/
      queryFeeDetails: AugmentedCall<
        ApiType,
        (
          uxt: Extrinsic | IExtrinsic | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<FeeDetails>
      >;
      /**
       * The transaction info
       **/
      queryInfo: AugmentedCall<
        ApiType,
        (
          uxt: Extrinsic | IExtrinsic | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<RuntimeDispatchInfo>
      >;
    };
    /** 0xf3ff14d5ab527059/2 */
    transactionPaymentCallApi: {
      /**
       * The call fee details
       **/
      queryCallFeeDetails: AugmentedCall<
        ApiType,
        (
          call: Call | IMethod | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<FeeDetails>
      >;
      /**
       * The call info
       **/
      queryCallInfo: AugmentedCall<
        ApiType,
        (
          call: Call | IMethod | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<RuntimeDispatchInfo>
      >;
    };
  } // AugmentedCalls
} // declare module
