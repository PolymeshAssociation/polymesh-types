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

#### Standalone Usage (Direct Polkadot API)

If you're using the Polkadot API directly (without the Polymesh SDK):

```ts
// At the top of your entry point file
import '@polymeshassociation/polymesh-types/polkadot/augment-types';
import '@polymeshassociation/polymesh-types/polkadot/augment-api';

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

#### Usage with Polymesh SDK

If you're using the Polymesh SDK and need access to the underlying Polkadot API with full type support, use **type-only imports** to avoid runtime conflicts:

```ts
// At the top of your entry point file
import type {} from '@polymeshassociation/polymesh-types/polkadot/types-lookup';

import { Polymesh } from '@polymeshassociation/polymesh-sdk';

async function main() {
  const polymesh = await Polymesh.connect({
    nodeUrl: 'wss://testnet-rpc.polymesh.live',
    // ... other config
  });

  // Access the underlying API with full type support
  const api = polymesh._polkadotApi;
  // Now api.query, api.tx, etc. have proper Polymesh types instead of 'any'
}
```

**Notes:**

- The augmentation imports must come before any Polkadot API or Polymesh SDK usage.
- Use regular imports (`import '...'`) when using Polkadot API directly.
- Use type-only import of `types-lookup` (`import type {} from '.../types-lookup'`) when using with Polymesh SDK to resolve "any" type issues.
- Type-only imports provide TypeScript type information without executing module code at runtime.
- The `types-lookup` import specifically resolves type lookup definitions, while `augment-api` and `augment-types` extend the API interfaces.

### Importing Specific Types

After importing the type augmentations, you can import specific Polymesh types using the standard Polkadot types imports. The augmentations make Polymesh-specific types available through the Polkadot type system:

```ts
// Import type augmentations first (at the top of your entry file)
import type {} from '@polymeshassociation/polymesh-types/polkadot/types-lookup';

// Then import specific types using standard Polkadot imports
import type { PalletStakingActiveEraInfo } from '@polkadot/types/lookup';
import type { PolymeshPrimitivesIdentityId } from '@polkadot/types/lookup';
import type { PalletAssetAssetDetails } from '@polkadot/types/lookup';

// These imports will now have full Polymesh type definitions
function processEraInfo(era: PalletStakingActiveEraInfo) {
  // TypeScript will have full type information for Polymesh-specific fields
}
```

This works because the type augmentations extend the Polkadot type lookup system with Polymesh-specific definitions, making them available through the standard import paths.

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
