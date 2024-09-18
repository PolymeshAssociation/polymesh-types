import { DefinitionCall } from '@polkadot/types/types';

export const AssetApiV3: Record<string, DefinitionCall> = {
  can_transfer_granular: {
    description:
      'Checks whether a transaction with given parameters can take place or not. The result is granular meaning each check is run and returned regardless of outcome.',
    params: [
      { name: 'from_custodian', type: 'Option<IdentityId>' },
      { name: 'from_portfolio', type: 'PortfolioId' },
      { name: 'to_custodian', type: 'Option<IdentityId>' },
      { name: 'to_portfolio', type: 'PortfolioId' },
      { name: 'ticker', type: 'Ticker' },
      { name: 'value', type: 'Balance' },
    ],
    type: 'CanTransferGranularReturn',
  },
};
