import type { DefinitionsCall } from '@polkadot/types/types';

import { AssetApiV3 } from './assetApi/v3';
import { AssetApiV4 } from './assetApi/v4';
import { ComplianceApiV1 } from './complianceApi/v1';
import { ComplianceApiV2 } from './complianceApi/v2';
import { GroupApiV1 } from './groupApi/v1';
import { IdentityApiV3 } from './identityApi/v3';
import { IdentityApiV4 } from './identityApi/v4';
import { NFTApiV1 } from './nftApi/v1';
import { NFTApiV2 } from './nftApi/v2';
import { PipsApiV1 } from './pipsApi/v1';
import { ProtocolFeeApiV1 } from './protocolFeeApi/v1';
import { SettlementApiV1 } from './settlementApi/v1';
import { SettlementApiV2 } from './settlementApi/v2';
import { StakingApiV1 } from './stakingApi/v1';
import { StatisticsApiV0 } from './statisticsApi/v0';

export const runtime: DefinitionsCall = {
  AssetApi: [
    { methods: AssetApiV4, version: 4 },
    { methods: AssetApiV3, version: 3 },
  ],
  ComplianceApi: [
    { methods: ComplianceApiV2, version: 2 },
    { methods: ComplianceApiV1, version: 1 },
  ],
  GroupApi: [{ methods: GroupApiV1, version: 1 }],
  IdentityApi: [
    { methods: IdentityApiV4, version: 4 },
    { methods: IdentityApiV3, version: 3 },
  ],
  NFTApi: [
    { methods: NFTApiV2, version: 2 },
    { methods: NFTApiV1, version: 1 },
  ],
  PipsApi: [{ methods: PipsApiV1, version: 1 }],
  ProtocolFeeApi: [{ methods: ProtocolFeeApiV1, version: 1 }],
  SettlementApi: [
    { methods: SettlementApiV2, version: 2 },
    { methods: SettlementApiV1, version: 1 },
  ],
  StakingApi: [{ methods: StakingApiV1, version: 1 }],
  StatisticsApi: [{ methods: StatisticsApiV0, version: 0 }],
};

export default runtime;
