import { OverrideBundleDefinition } from '@polkadot/types/types';

import rpc from './rpc';
import signedExtensions from './signedExtensions';
import types from './types';

export interface PolymeshTypesBundle {
  spec: Record<string, OverrideBundleDefinition>;
}

const specTypes: OverrideBundleDefinition = {
  rpc,
  types,
  signedExtensions,
};

export const typesBundle: PolymeshTypesBundle = {
  spec: {
    polymesh_dev: specTypes,
    polymesh: specTypes,
    polymesh_ci: specTypes,
    polymesh_mainnet: specTypes,
    polymesh_testnet: specTypes,
  },
};
