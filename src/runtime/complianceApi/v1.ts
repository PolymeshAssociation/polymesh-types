import { DefinitionCall } from '@polkadot/types/types';

export const ComplianceApiV1: Record<string, DefinitionCall> = {
  compliance_report: {
    description: 'Checks all compliance requirements for the given ticker.',
    params: [
      { name: 'ticker', type: 'Ticker' },
      { name: 'sender_identity', type: 'IdentityId' },
      { name: 'receiver_identity', type: 'IdentityId' },
    ],
    type: 'Result<ComplianceReport, DispatchError>',
  },
};
