import { DefinitionCall } from '@polkadot/types/types';

export const ComplianceApiV2: Record<string, DefinitionCall> = {
  compliance_report: {
    description: 'Checks all compliance requirements for the given asset_id.',
    params: [
      {
        name: 'asset_id',
        type: 'PolymeshAssetId',
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
};
