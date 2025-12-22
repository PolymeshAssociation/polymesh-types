// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type {
  Bytes,
  Null,
  Option,
  Result,
  Struct,
  Text,
  Vec,
  bool,
  u128,
  u32,
  u64,
} from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { OpaqueKeyOwnershipProof } from '@polkadot/types/interfaces/babe';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { AccountId32, H256, Slot } from '@polkadot/types/interfaces/runtime';
import type {
  FrameSystemEventRecord,
  PalletContractsPrimitivesCode,
  PalletContractsPrimitivesCodeUploadReturnValue,
  PalletContractsPrimitivesContractAccessError,
  PalletContractsPrimitivesContractResult,
  PalletContractsPrimitivesExecReturnValue,
  PalletContractsPrimitivesStorageDeposit,
  PalletContractsWasmDeterminism,
  PalletGroupRpcRuntimeApiMember,
  PalletIdentityDidStatus,
  PalletIdentityKeyIdentityData,
  PalletIdentityRpcDidRecords,
  PalletPipsVoteCount,
  PalletTransactionPaymentFeeDetails,
  PalletTransactionPaymentRuntimeDispatchInfo,
  PolymeshCommonUtilitiesProtocolFeeProtocolOp,
  PolymeshPrimitivesAssetAssetId,
  PolymeshPrimitivesAuthorization,
  PolymeshPrimitivesAuthorizationAuthorizationType,
  PolymeshPrimitivesComplianceManagerComplianceReport,
  PolymeshPrimitivesIdentityClaim,
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesIdentityIdPortfolioId,
  PolymeshPrimitivesNftNfTs,
  PolymeshPrimitivesSecondaryKeySignatory,
  PolymeshPrimitivesSettlementAffirmationCount,
  PolymeshPrimitivesSettlementAssetCount,
  PolymeshPrimitivesSettlementExecuteInstructionInfo,
  PolymeshPrimitivesSettlementLeg,
  PolymeshPrimitivesTransferComplianceTransferCondition,
  SpAuthorityDiscoveryAppPublic,
  SpConsensusBabeAppPublic,
  SpConsensusBabeBabeConfiguration,
  SpConsensusBabeEpoch,
  SpConsensusGrandpaAppPublic,
  SpConsensusGrandpaEquivocationProof,
  SpConsensusSlotsEquivocationProof,
  SpCoreCryptoKeyTypeId,
  SpInherentsCheckInherentsResult,
  SpInherentsInherentData,
  SpRuntimeBlockLazyBlock,
  SpRuntimeDispatchError,
  SpRuntimeExtrinsicInclusionMode,
  SpRuntimeHeader,
  SpRuntimeTransactionValidityTransactionSource,
  SpRuntimeTransactionValidityTransactionValidityError,
  SpRuntimeTransactionValidityValidTransaction,
  SpVersionRuntimeVersion,
  SpWeightsWeightV2Weight,
} from '@polkadot/types/lookup';
import type { IExtrinsic, Observable } from '@polkadot/types/types';
import type {
  PalletPipsPipId,
  PalletProtocolFeeRpcRuntimeApiCappedFee,
  PolymeshPrimitivesSettlementInstructionId,
  PolymeshRuntimeDevelopRuntimeRuntimeCall,
} from './polymesh';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module '@polkadot/api-base/types/calls' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/ */
    accountNonceApi: {
      /**
       * Get current account nonce of given `AccountId`.
       **/
      accountNonce: AugmentedCall<
        ApiType,
        (account: AccountId32 | string | Uint8Array) => Observable<u32>
      >;
    };
    /** 0xbb6ba9053c5c9d78/ */
    assetApi: {
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "asset_transferReport",,     "params": [,        { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,        { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],,        1,,        false,     ], }', ```
       **/
      transferReport: AugmentedCall<
        ApiType,
        (
          sender_portfolio:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          receiver_portfolio:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          asset_id: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          transfer_value: u128 | AnyNumber | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<SpRuntimeDispatchError>>
      >;
    };
    /** 0x687ad44ad37f03c2/ */
    authorityDiscoveryApi: {
      /**
       * Retrieve authority identifiers of the current and next authority set.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<SpAuthorityDiscoveryAppPublic>>>;
    };
    /** 0xcbca25e39f142387/ */
    babeApi: {
      /**
       * Return the configuration for BABE.
       **/
      configuration: AugmentedCall<ApiType, () => Observable<SpConsensusBabeBabeConfiguration>>;
      /**
       * Returns information regarding the current epoch.
       **/
      currentEpoch: AugmentedCall<ApiType, () => Observable<SpConsensusBabeEpoch>>;
      /**
       * Returns the slot that started the current epoch.
       **/
      currentEpochStart: AugmentedCall<ApiType, () => Observable<Slot>>;
      /**
       * Generates a proof of key ownership for the given authority in the, current epoch. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `slot` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the epoch for the given slot is live on-chain. Future, implementations will instead use indexed data through an offchain, worker, not requiring older states to be available.
       **/
      generateKeyOwnershipProof: AugmentedCall<
        ApiType,
        (
          slot: Slot | AnyNumber | Uint8Array,
          authority_id: SpConsensusBabeAppPublic | string | Uint8Array
        ) => Observable<Option<Bytes>>
      >;
      /**
       * Returns information regarding the next epoch (which was already, previously announced).
       **/
      nextEpoch: AugmentedCall<ApiType, () => Observable<SpConsensusBabeEpoch>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<
        ApiType,
        (
          equivocation_proof:
            | SpConsensusSlotsEquivocationProof
            | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any }
            | string
            | Uint8Array,
          key_owner_proof: OpaqueKeyOwnershipProof | string | Uint8Array
        ) => Observable<Option<Null>>
      >;
    };
    /** 0x40fe3ad401f8959a/ */
    blockBuilder: {
      /**
       * Apply the given extrinsic.,, Returns an inclusion outcome which specifies if this extrinsic is included in, this block or not.
       **/
      applyExtrinsic: AugmentedCall<
        ApiType,
        (
          extrinsic: Extrinsic | IExtrinsic | string | Uint8Array
        ) => Observable<
          Result<
            Result<Null, SpRuntimeDispatchError>,
            SpRuntimeTransactionValidityTransactionValidityError
          >
        >
      >;
      /**
       * Check that the inherents are valid. The inherent data will vary from chain to chain.
       **/
      checkInherents: AugmentedCall<
        ApiType,
        (
          block: SpRuntimeBlockLazyBlock | { header?: any; extrinsics?: any } | string | Uint8Array,
          data: SpInherentsInherentData | { data?: any } | string | Uint8Array
        ) => Observable<SpInherentsCheckInherentsResult>
      >;
      /**
       * Finish the current block.
       **/
      finalizeBlock: AugmentedCall<ApiType, () => Observable<SpRuntimeHeader>>;
      /**
       * Generate inherent extrinsics. The inherent data will vary from chain to chain.
       **/
      inherentExtrinsics: AugmentedCall<
        ApiType,
        (
          inherent: SpInherentsInherentData | { data?: any } | string | Uint8Array
        ) => Observable<Vec<Bytes>>
      >;
    };
    /** 0x98cf18c375950e1f/ */
    complianceApi: {
      /**
       * Checks all compliance requirements for the given ticker,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "compliance_complianceReport",,     "params":[,       { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,       { "did": "0x0200000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,       { "ticker": "0x5449434B4552303030303031", "ids": [1]},     ],   }', ```
       **/
      complianceReport: AugmentedCall<
        ApiType,
        (
          asset_id: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          sender_identity: PolymeshPrimitivesIdentityId | string | Uint8Array,
          receiver_identity: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<
          Result<PolymeshPrimitivesComplianceManagerComplianceReport, SpRuntimeDispatchError>
        >
      >;
    };
    /** 0x68b66ba122c93fa7/ */
    contractsApi: {
      /**
       * Perform a call from a specified account to a given contract.,, See [`crate::Pallet::bare_call`].
       **/
      call: AugmentedCall<
        ApiType,
        (
          origin: AccountId32 | string | Uint8Array,
          dest: AccountId32 | string | Uint8Array,
          value: u128 | AnyNumber | Uint8Array,
          gas_limit:
            | Option<SpWeightsWeightV2Weight>
            | null
            | Uint8Array
            | SpWeightsWeightV2Weight
            | { refTime?: any; proofSize?: any }
            | string,
          storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber,
          input_data: Bytes | string | Uint8Array
        ) => Observable<
          {
            readonly gasConsumed: SpWeightsWeightV2Weight;
            readonly gasRequired: SpWeightsWeightV2Weight;
            readonly storageDeposit: PalletContractsPrimitivesStorageDeposit;
            readonly debugMessage: Bytes;
            readonly result: Result<
              PalletContractsPrimitivesExecReturnValue,
              SpRuntimeDispatchError
            >;
            readonly events: Option<Vec<FrameSystemEventRecord>>;
          } & Struct
        >
      >;
      /**
       * Query a given storage key in a given contract.,, Returns `Ok(Some(Vec<u8>))` if the storage value exists under the given key in the, specified account and `Ok(None)` if it doesn't. If the account specified by the address, doesn't exist, or doesn't have a contract then `Err` is returned.
       **/
      getStorage: AugmentedCall<
        ApiType,
        (
          address: AccountId32 | string | Uint8Array,
          key: Bytes | string | Uint8Array
        ) => Observable<Result<Option<Bytes>, PalletContractsPrimitivesContractAccessError>>
      >;
      /**
       * Instantiate a new contract.,, See `[crate::Pallet::bare_instantiate]`.
       **/
      instantiate: AugmentedCall<
        ApiType,
        (
          origin: AccountId32 | string | Uint8Array,
          value: u128 | AnyNumber | Uint8Array,
          gas_limit:
            | Option<SpWeightsWeightV2Weight>
            | null
            | Uint8Array
            | SpWeightsWeightV2Weight
            | { refTime?: any; proofSize?: any }
            | string,
          storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber,
          code:
            | PalletContractsPrimitivesCode
            | { Upload: any }
            | { Existing: any }
            | string
            | Uint8Array,
          data: Bytes | string | Uint8Array,
          salt: Bytes | string | Uint8Array
        ) => Observable<PalletContractsPrimitivesContractResult>
      >;
      /**
       * Upload new code without instantiating a contract from it.,, See [`crate::Pallet::bare_upload_code`].
       **/
      uploadCode: AugmentedCall<
        ApiType,
        (
          origin: AccountId32 | string | Uint8Array,
          code: Bytes | string | Uint8Array,
          storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber,
          determinism: PalletContractsWasmDeterminism | 'Enforced' | 'Relaxed' | number | Uint8Array
        ) => Observable<
          Result<PalletContractsPrimitivesCodeUploadReturnValue, SpRuntimeDispatchError>
        >
      >;
    };
    /** 0xdf6acb689907609b/ */
    core: {
      /**
       * Execute the given block.
       **/
      executeBlock: AugmentedCall<
        ApiType,
        (
          block: SpRuntimeBlockLazyBlock | { header?: any; extrinsics?: any } | string | Uint8Array
        ) => Observable<Null>
      >;
      /**
       * Initialize a block with the given header and return the runtime executive mode.
       **/
      initializeBlock: AugmentedCall<
        ApiType,
        (
          header:
            | SpRuntimeHeader
            | {
                parentHash?: any;
                number?: any;
                stateRoot?: any;
                extrinsicsRoot?: any;
                digest?: any;
              }
            | string
            | Uint8Array
        ) => Observable<SpRuntimeExtrinsicInclusionMode>
      >;
      /**
       * Returns the version of the runtime.
       **/
      version: AugmentedCall<ApiType, () => Observable<SpVersionRuntimeVersion>>;
    };
    /** 0xfbc577b9d747efd6/ */
    genesisBuilder: {
      /**
       * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the, storage.,, In the case of a FRAME-based runtime, this function deserializes the full, `RuntimeGenesisConfig` from the given JSON blob and puts it into the storage. If the, provided JSON blob is incorrect or incomplete or the deserialization fails, an error, is returned.,, Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no, defaults will be used.
       **/
      buildState: AugmentedCall<
        ApiType,
        (json: Bytes | string | Uint8Array) => Observable<Result<Null, Text>>
      >;
      /**
       * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by, `id`.,, If `id` is `None` the function should return JSON blob representation of the default, `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default, `RuntimeGenesisConfig`.,, Otherwise function returns a JSON representation of the built-in, named, `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not, exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of, (potentially nested) key-value pairs that are intended for customizing the default, runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation, of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can, be used in `build_state` method.
       **/
      getPreset: AugmentedCall<
        ApiType,
        (id: Option<Text> | null | Uint8Array | Text | string) => Observable<Option<Bytes>>
      >;
      /**
       * Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.,, The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If, no named presets are provided by the runtime the list is empty.
       **/
      presetNames: AugmentedCall<ApiType, () => Observable<Vec<Text>>>;
    };
    /** 0xed99c5acb25eedf5/ */
    grandpaApi: {
      /**
       * Get current GRANDPA authority set id.
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<u64>>;
      /**
       * Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignore this parameter and instead rely on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
       **/
      generateKeyOwnershipProof: AugmentedCall<
        ApiType,
        (
          set_id: u64 | AnyNumber | Uint8Array,
          authority_id: SpConsensusGrandpaAppPublic | string | Uint8Array
        ) => Observable<Option<Bytes>>
      >;
      /**
       * Get the current GRANDPA authorities and weights. This should not change except, for when changes are scheduled and the corresponding delay has passed.,, When called at block B, it will return the set of authorities that should be, used to finalize descendants of this block (B+1, B+2, ...). The block B itself, is finalized by the authorities from block B-1.
       **/
      grandpaAuthorities: AugmentedCall<
        ApiType,
        () => Observable<Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>>
      >;
      /**
       * Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<
        ApiType,
        (
          equivocation_proof:
            | SpConsensusGrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          key_owner_proof: Bytes | string | Uint8Array
        ) => Observable<Option<Null>>
      >;
    };
    /** 0x595ac34c5ea1f5fe/ */
    groupApi: {
      /**
       *
       **/
      getCddValidMembers: AugmentedCall<
        ApiType,
        () => Observable<Vec<PalletGroupRpcRuntimeApiMember>>
      >;
      /**
       *
       **/
      getGcValidMembers: AugmentedCall<
        ApiType,
        () => Observable<Vec<PalletGroupRpcRuntimeApiMember>>
      >;
    };
    /** 0xf28e8080b6e2dfd0/ */
    identityApi: {
      /**
       * Retrieve DidRecord for a given `did`.
       **/
      getDidRecords: AugmentedCall<
        ApiType,
        (
          did: PolymeshPrimitivesIdentityId | string | Uint8Array
        ) => Observable<PalletIdentityRpcDidRecords>
      >;
      /**
       * Retrieve the status of the DID
       **/
      getDidStatus: AugmentedCall<
        ApiType,
        (
          dids:
            | Vec<PolymeshPrimitivesIdentityId>
            | (PolymeshPrimitivesIdentityId | string | Uint8Array)[]
        ) => Observable<Vec<PalletIdentityDidStatus>>
      >;
      /**
       * Retrieve list of a authorization for a given signatory
       **/
      getFilteredAuthorizations: AugmentedCall<
        ApiType,
        (
          signatory:
            | PolymeshPrimitivesSecondaryKeySignatory
            | { Identity: any }
            | { Account: any }
            | string
            | Uint8Array,
          allow_expired: bool | boolean | Uint8Array,
          auth_type:
            | Option<PolymeshPrimitivesAuthorizationAuthorizationType>
            | null
            | Uint8Array
            | PolymeshPrimitivesAuthorizationAuthorizationType
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
        ) => Observable<Vec<PolymeshPrimitivesAuthorization>>
      >;
      /**
       * Provide the `KeyIdentityData` from a given `AccountId`, including:, - the corresponding DID,, - whether the `AccountId` is a primary or secondary key,, - any permissions related to the key.,, This is an aggregate call provided for UX convenience.
       **/
      getKeyIdentityData: AugmentedCall<
        ApiType,
        (
          acc: AccountId32 | string | Uint8Array
        ) => Observable<Option<PalletIdentityKeyIdentityData>>
      >;
      /**
       * Returns CDD status of an identity
       **/
      isIdentityHasValidCdd: AugmentedCall<
        ApiType,
        (
          did: PolymeshPrimitivesIdentityId | string | Uint8Array,
          buffer_time: Option<u64> | null | Uint8Array | u64 | AnyNumber
        ) => Observable<Result<PolymeshPrimitivesIdentityId, Bytes>>
      >;
      /**
       * Returns all valid [`IdentityClaim`] of type `CustomerDueDiligence` for the given `target_identity`.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "identity_validCDDClaims",,     "params":[,         "0x0100000000000000000000000000000000000000000000000000000000000000",,         null,     ],   }', ```
       **/
      validCddClaims: AugmentedCall<
        ApiType,
        (
          target_identity: PolymeshPrimitivesIdentityId | string | Uint8Array,
          cdd_checker_leeway: Option<u64> | null | Uint8Array | u64 | AnyNumber
        ) => Observable<Vec<PolymeshPrimitivesIdentityClaim>>
      >;
    };
    /** 0x37e397fc7c91f5e4/ */
    metadata: {
      /**
       * Returns the metadata of a runtime.
       **/
      metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
      /**
       * Returns the metadata at a given version.,, If the given `version` isn't supported, this will return `None`., Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
       **/
      metadataAtVersion: AugmentedCall<
        ApiType,
        (version: u32 | AnyNumber | Uint8Array) => Observable<Option<OpaqueMetadata>>
      >;
      /**
       * Returns the supported metadata versions.,, This can be used to call `metadata_at_version`.
       **/
      metadataVersions: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
    };
    /** 0x9ea061a615cee2fe/ */
    nftApi: {
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "nft_transferReport",,     "params": [,        { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,        { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,        { "asset_id": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "ids": [1]},,        false,     ], }', ```
       **/
      transferReport: AugmentedCall<
        ApiType,
        (
          sender_portfolio:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          receiver_portfolio:
            | PolymeshPrimitivesIdentityIdPortfolioId
            | { did?: any; kind?: any }
            | string
            | Uint8Array,
          nfts: PolymeshPrimitivesNftNfTs | { assetId?: any; ids?: any } | string | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<SpRuntimeDispatchError>>
      >;
    };
    /** 0xf78b278be53f454c/ */
    offchainWorkerApi: {
      /**
       * Starts the off-chain task for given block header.
       **/
      offchainWorker: AugmentedCall<
        ApiType,
        (
          header:
            | SpRuntimeHeader
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
    /** 0x329342994773047f/ */
    pipsApi: {
      /**
       * Retrieve votes for a proposal for a given `id`.
       **/
      getVotes: AugmentedCall<
        ApiType,
        (id: PalletPipsPipId | AnyNumber | Uint8Array) => Observable<PalletPipsVoteCount>
      >;
      /**
       * Retrieve proposals started by `address`.
       **/
      proposedBy: AugmentedCall<
        ApiType,
        (address: AccountId32 | string | Uint8Array) => Observable<Vec<u32>>
      >;
      /**
       * Retrieve proposals `address` voted on.
       **/
      votedOn: AugmentedCall<
        ApiType,
        (address: AccountId32 | string | Uint8Array) => Observable<Vec<u32>>
      >;
    };
    /** 0x001a0b29f17d01f4/ */
    protocolFeeApi: {
      /**
       *
       **/
      computeFee: AugmentedCall<
        ApiType,
        (
          op:
            | PolymeshCommonUtilitiesProtocolFeeProtocolOp
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
        ) => Observable<PalletProtocolFeeRpcRuntimeApiCappedFee>
      >;
    };
    /** 0xab3c0572291feb8b/ */
    sessionKeys: {
      /**
       * Decode the given public session keys.,, Returns the list of public raw public keys + key type.
       **/
      decodeSessionKeys: AugmentedCall<
        ApiType,
        (
          encoded: Bytes | string | Uint8Array
        ) => Observable<Option<Vec<ITuple<[Bytes, SpCoreCryptoKeyTypeId]>>>>
      >;
      /**
       * Generate a set of session keys with optionally using the given seed., The keys should be stored within the keystore exposed via runtime, externalities.,, The seed needs to be a valid `utf8` string.,, Returns the concatenated SCALE encoded public keys.
       **/
      generateSessionKeys: AugmentedCall<
        ApiType,
        (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>
      >;
    };
    /** 0x53df5001418f3b46/ */
    settlementApi: {
      /**
       * Returns an [`AffirmationCount`] instance containing the number of assets being sent/received from `portfolios`,, and the number of off-chain assets in the instruction.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "settlement_getAffirmationCount",,     "params": [1, [{ "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"}]],   }', ```
       **/
      getAffirmationCount: AugmentedCall<
        ApiType,
        (
          instruction_id: PolymeshPrimitivesSettlementInstructionId | AnyNumber | Uint8Array,
          portfolios:
            | Vec<PolymeshPrimitivesIdentityIdPortfolioId>
            | (
                | PolymeshPrimitivesIdentityIdPortfolioId
                | { did?: any; kind?: any }
                | string
                | Uint8Array
              )[]
        ) => Observable<PolymeshPrimitivesSettlementAffirmationCount>
      >;
      /**
       * Returns an [`ExecuteInstructionInfo`] instance containing the consumed weight and the number of fungible and non fungible, tokens in the instruction. Executing an instruction includes verifying the compliance and transfer restrictions of all assets, in the instruction, unlocking all assets, pruning the instruction, updating the statistics for each asset and more.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "settlement_getExecuteInstructionInfo",,     "params": [1],   }', ```
       **/
      getExecuteInstructionInfo: AugmentedCall<
        ApiType,
        (
          instruction_id: PolymeshPrimitivesSettlementInstructionId | AnyNumber | Uint8Array
        ) => Observable<Option<PolymeshPrimitivesSettlementExecuteInstructionInfo>>
      >;
      /**
       * Returns a vector containing all errors for the execution. An empty vec means there's no error.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "settlement_getExecuteIntructionReport",,     "params": [1],   }', ```
       **/
      getExecuteInstructionReport: AugmentedCall<
        ApiType,
        (
          instruction_id: PolymeshPrimitivesSettlementInstructionId | AnyNumber | Uint8Array
        ) => Observable<Vec<SpRuntimeDispatchError>>
      >;
      /**
       * Returns a vector containing all errors for the transfer. An empty vec means there's no error.,, ```ignore, curl http://localhost:9933 -H "Content-Type: application/json" -d '{,     "id":1,,     "jsonrpc":"2.0",,     "method": "settlement_getTransferReport",,     "params": [,         {,            "NonFungible":,                {,                    "sender": { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,                    "receiver": { "did": "0x0100000000000000000000000000000000000000000000000000000000000000", "kind": "Default"},,                    "nfts": { "ticker": "0x5449434B4552303030303031", "ids": [1]},                },         },,         false,     ], }', ```
       **/
      getTransferReport: AugmentedCall<
        ApiType,
        (
          leg:
            | PolymeshPrimitivesSettlementLeg
            | { Fungible: any }
            | { NonFungible: any }
            | { OffChain: any }
            | string
            | Uint8Array,
          skip_locked_check: bool | boolean | Uint8Array
        ) => Observable<Vec<SpRuntimeDispatchError>>
      >;
      /**
       * Returns the [`AssetCount`] for the given `instruction_id`.
       **/
      instructionAssetCount: AugmentedCall<
        ApiType,
        (
          instruction_id: PolymeshPrimitivesSettlementInstructionId | AnyNumber | Uint8Array
        ) => Observable<PolymeshPrimitivesSettlementAssetCount>
      >;
      /**
       * Returns the weight for calling `lock_instruction` for the given `instruction_id`.
       **/
      lockInstructionWeight: AugmentedCall<
        ApiType,
        (
          instruction_id: PolymeshPrimitivesSettlementInstructionId | AnyNumber | Uint8Array
        ) => Observable<Result<SpWeightsWeightV2Weight, SpRuntimeDispatchError>>
      >;
    };
    /** 0x18ef58a3b67ba770/ */
    stakingApi: {
      /**
       * Returns the page count of exposures for a validator `account` in a given era.
       **/
      erasStakersPageCount: AugmentedCall<
        ApiType,
        (
          era: u32 | AnyNumber | Uint8Array,
          account: AccountId32 | string | Uint8Array
        ) => Observable<u32>
      >;
      /**
       * Returns the nominations quota for a nominator with a given balance.
       **/
      nominationsQuota: AugmentedCall<
        ApiType,
        (balance: u128 | AnyNumber | Uint8Array) => Observable<u32>
      >;
      /**
       * Returns true if a validator `account` has pages to be claimed for the given era.
       **/
      pendingRewards: AugmentedCall<
        ApiType,
        (
          era: u32 | AnyNumber | Uint8Array,
          account: AccountId32 | string | Uint8Array
        ) => Observable<bool>
      >;
    };
    /** 0x608339ce0e76adf3/ */
    statisticsApi: {
      /**
       * Returns a vector containing all [`TransferCondition`] that are not being respected for the transfer. An empty vec means there's no error.
       **/
      transferRestrictionsReport: AugmentedCall<
        ApiType,
        (
          asset_id: PolymeshPrimitivesAssetAssetId | string | Uint8Array,
          sender_did: PolymeshPrimitivesIdentityId | string | Uint8Array,
          receiver_did: PolymeshPrimitivesIdentityId | string | Uint8Array,
          transfer_amount: u128 | AnyNumber | Uint8Array
        ) => Observable<
          Result<Vec<PolymeshPrimitivesTransferComplianceTransferCondition>, SpRuntimeDispatchError>
        >
      >;
    };
    /** 0xd2bc9897eed08f15/ */
    taggedTransactionQueue: {
      /**
       * Validate the transaction.,, This method is invoked by the transaction pool to learn details about given transaction., The implementation should make sure to verify the correctness of the transaction, against current state. The given `block_hash` corresponds to the hash of the block, that is used as current state.,, Note that this call may be performed by the pool multiple times and transactions, might be verified in any possible order.
       **/
      validateTransaction: AugmentedCall<
        ApiType,
        (
          source:
            | SpRuntimeTransactionValidityTransactionSource
            | 'InBlock'
            | 'Local'
            | 'External'
            | number
            | Uint8Array,
          tx: Extrinsic | IExtrinsic | string | Uint8Array,
          block_hash: H256 | string | Uint8Array
        ) => Observable<
          Result<
            SpRuntimeTransactionValidityValidTransaction,
            SpRuntimeTransactionValidityTransactionValidityError
          >
        >
      >;
    };
    /** 0x37c8bb1350a9a2a8/ */
    transactionPaymentApi: {
      /**
       *
       **/
      queryFeeDetails: AugmentedCall<
        ApiType,
        (
          uxt: Extrinsic | IExtrinsic | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<PalletTransactionPaymentFeeDetails>
      >;
      /**
       *
       **/
      queryInfo: AugmentedCall<
        ApiType,
        (
          uxt: Extrinsic | IExtrinsic | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>
      >;
    };
    /** 0xf3ff14d5ab527059/ */
    transactionPaymentCallApi: {
      /**
       * Query fee details of a given encoded `Call`.
       **/
      queryCallFeeDetails: AugmentedCall<
        ApiType,
        (
          call: PolymeshRuntimeDevelopRuntimeRuntimeCall | IMethod | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<PalletTransactionPaymentFeeDetails>
      >;
      /**
       * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
       **/
      queryCallInfo: AugmentedCall<
        ApiType,
        (
          call: PolymeshRuntimeDevelopRuntimeRuntimeCall | IMethod | string | Uint8Array,
          len: u32 | AnyNumber | Uint8Array
        ) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>
      >;
    };
  } // AugmentedCalls
} // declare module
