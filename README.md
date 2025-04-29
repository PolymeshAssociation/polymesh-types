# Polymesh Types

Substrate types used in polymesh chain.

## Usage

### Basic Usage (Type Bundles)

To use the Polymesh type bundles with the Polkadot.js API:

```ts
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundle } from '@polymeshassociation/polymesh-types';

async function main() {
  const provider = new WsProvider('wss://testnet-rpc.polymesh.live');
  const api = await ApiPromise.create({
    provider,
    typesBundle,
  });
  // ... your code here
}
```

### Using Type Augmentations

To get full TypeScript support for Polymesh-specific types, import the type augmentations **before** using the API types or instantiating the Polkadot API. The best practice is to place these imports at the very top of your project's entry point (e.g., `src/index.ts` or `src/main.ts`).

If your `tsconfig.json` includes the `src` folder (e.g., `"include": ["src"]`), the type augmentations will be available globally to all files in `src`.

```ts
// At the top of your entry point file
import '@polymeshassociation/polymesh-types/src/generated-types/augment-types';
import '@polymeshassociation/polymesh-types/src/generated-types/augment-api';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundle } from '@polymeshassociation/polymesh-types';

async function main() {
  const provider = new WsProvider('wss://testnet-rpc.polymesh.live');
  const api = await ApiPromise.create({
    provider,
    typesBundle,
  });
  // Now you have full type support for Polymesh modules
}
```

**Notes:**

- The augmentation imports must come before any Polkadot API usage.
- This ensures all Polymesh types are available throughout your project.

---

## Generating Types for a Custom Node

You can generate types for any Polymesh or Polymesh-based private chain by specifying a custom node endpoint. By default, the scripts connect to `ws://localhost:9944`, but you can override this using the `POLYMESH_ENDPOINT` environment variable:

```sh
POLYMESH_ENDPOINT=wss://testnet-rpc.polymesh.live yarn generate:types
```

This will fetch the chain metadata and generate types for the specified node.

---

## Development

Types specific to different chain versions are in [types](src/types/) folder
