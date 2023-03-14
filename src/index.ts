import { OverrideBundleDefinition } from '@polkadot/types/types';

import rpc from './rpc';
import signedExtensions from './signedExtensions';
import types from './types';

const specTypes: OverrideBundleDefinition = {
  rpc,
  types,
  signedExtensions,
};

export const typesBundle = {
  spec: {
    polymesh_dev: specTypes,
    polymesh: specTypes,
    polymesh_ci: specTypes,
    polymesh_mainnet: specTypes,
    polymesh_testnet: specTypes,
  },
};
