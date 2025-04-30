import { ApiPromise, WsProvider } from '@polkadot/api';
import { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import {
  DefinitionRpc,
  DefinitionRpcSub,
  DefinitionsCall,
  RegistryTypes,
} from '@polkadot/types/types';
import fs from 'fs';
import forEach from 'lodash/forEach';
import path from 'path';
import { rimraf } from 'rimraf';
import util from 'util';

import { PolymeshTypesBundle, typesBundle } from '../src';

const definitionsDir = path.resolve('src', 'generated-types');
const typesDir = path.resolve(definitionsDir, 'polymesh');

rimraf.sync(typesDir);
fs.mkdirSync(typesDir);

async function getChainSpecAndMetadata(endpoint: string) {
  console.log(`Connecting to ${endpoint}...`);
  const provider = new WsProvider(endpoint);
  let api: ApiPromise;
  try {
    // Fail if not connected within 10 seconds
    api = (await Promise.race([
      ApiPromise.create({ provider, typesBundle }),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(new Error('Connection timeout: Unable to connect to node within 10 seconds.')),
          10000
        )
      ),
    ])) as ApiPromise;
  } catch (err) {
    console.error(
      `\nERROR: Could not connect to Polymesh node at ${endpoint}.\n${
        err instanceof Error ? err.message : err
      }`
    );
    process.exit(1);
  }

  const chainName = api.runtimeChain.toString();
  const specName = api.runtimeVersion.specName.toString();
  const specVersion = api.runtimeVersion.specVersion.toNumber();
  const metadataHex = api.runtimeMetadata.toHex();

  console.log(
    `\nGenerating definitions for:\n chainName: ${chainName}\n specName: ${specName}\n specVersion: ${specVersion}\n`
  );
  // Save metadata to metadata.json
  fs.writeFileSync(path.resolve('metadata.json'), JSON.stringify({ result: metadataHex }, null, 2));

  await api.disconnect();
  return { specName, specVersion };
}

function getTypesForSpec(
  polymeshTypesBundle: PolymeshTypesBundle,
  specName: string,
  specVersion: number
) {
  const bundle = polymeshTypesBundle.spec[specName] || polymeshTypesBundle.spec.polymesh_dev;
  if (!bundle || !Array.isArray(bundle.types)) {
    throw new Error(`No types bundle found for specName '${specName}'.`);
  }
  for (const entry of bundle.types) {
    const [min, max] = entry.minmax ?? [undefined, undefined];
    // Handle undefined/null/min/max for compatibility
    const minOk = min == null || specVersion >= min;
    const maxOk = max == null || specVersion <= max;
    if (minOk && maxOk) {
      return { types: entry.types, bundle };
    }
  }
  throw new Error(`No types found for specName '${specName}' and specVersion '${specVersion}'.`);
}

function writeDefinitions(schemaObj: {
  types: RegistryTypes;
  rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
  runtime?: DefinitionsCall;
  signedExtensions?: ExtDef;
}) {
  const { types, rpc: rpcModules } = schemaObj;

  fs.writeFileSync(
    path.resolve(typesDir, 'definitions.ts'),
    `export default ${util.inspect(
      { ...schemaObj, rpc: {} },
      {
        compact: false,
        depth: null,
        maxArrayLength: null,
      }
    )}`
  );

  fs.writeFileSync(
    path.resolve(definitionsDir, 'schema.ts'),
    `export default ${util.inspect(schemaObj, {
      compact: false,
      depth: null,
      maxArrayLength: null,
    })}`
  );

  let defExports = "export { default as polymesh } from './polymesh/definitions';\n";

  forEach(
    rpcModules,
    (rpc: Record<string, DefinitionRpc | DefinitionRpcSub>, moduleName: string) => {
      const moduleDir = path.resolve(definitionsDir, moduleName);

      rimraf.sync(moduleDir);
      fs.mkdirSync(moduleDir);

      fs.writeFileSync(
        path.resolve(moduleDir, 'definitions.ts'),
        `export default ${util.inspect(
          { rpc, types: {} },
          {
            compact: false,
            depth: null,
            maxArrayLength: null,
          }
        )}`
      );

      defExports = `${defExports}export { default as ${moduleName} } from './${moduleName}/definitions';\n`;
    }
  );

  fs.writeFileSync(path.resolve(definitionsDir, 'definitions.ts'), defExports);
}

// Get endpoint from environment variable or command line args (e.g. --endpoint wss://testnet-rpc.polymesh.live)
function getEndpointArg(): string {
  if (process.env.POLYMESH_ENDPOINT) {
    return process.env.POLYMESH_ENDPOINT;
  }
  return 'ws://localhost:9944';
}

(async () => {
  const endpoint = getEndpointArg();
  const { specName, specVersion } = await getChainSpecAndMetadata(endpoint);
  const { types, bundle } = getTypesForSpec(typesBundle, specName, specVersion);
  const { rpc, runtime, signedExtensions } = bundle;

  const schema = {
    types,
    rpc: rpc ?? {},
    runtime,
    signedExtensions,
  };

  writeDefinitions(schema);
})();
