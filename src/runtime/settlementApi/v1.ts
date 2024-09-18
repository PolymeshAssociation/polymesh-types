import { DefinitionCall } from '@polkadot/types/types';

export const SettlementApiV1: Record<string, DefinitionCall> = {
  get_execute_instruction_info: {
    description:
      'Returns an ExecuteInstructionInfo instance containing the consumed weight and the number of tokens in the instruction.',
    params: [{ name: 'instruction_id', type: 'InstructionId' }],
    type: 'ExecuteInstructionInfo',
  },
  get_affirmation_count: {
    description:
      'Returns an AffirmationCount instance containing the number of assets being sent/received from portfolios, and the number of off-chain assets in the instruction.',
    params: [
      { name: 'instruction_id', type: 'InstructionId' },
      { name: 'portfolios', type: 'Vec<PortfolioId>' },
    ],
    type: 'AffirmationCount',
  },
  get_transfer_report: {
    description:
      "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
    params: [
      { name: 'leg', type: 'Leg' },
      { name: 'skip_locked_check', type: 'bool' },
    ],
    type: 'Vec<DispatchError>',
  },
  get_execute_instruction_report: {
    description:
      "Returns a vector containing all errors for the execution. An empty vec means there's no error.",
    params: [{ name: 'instruction_id', type: 'InstructionId' }],
    type: 'Vec<DispatchError>',
  },
};
