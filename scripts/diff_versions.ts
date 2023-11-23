import { writeFileSync } from 'fs';
import { diff } from 'jest-diff';
import { join } from 'path';

import types from '../src/types';

let versions: { minmax: number[]; types: Record<string, string> }[] = types;
versions = versions.reverse();

let previous = {};
for (const {
  minmax: [min, max],
  types,
} of versions) {
  const filename = min === max ? `${min}` : `${min}-${max}`;

  const noColor = (string: string) => string;
  writeFileSync(
    join(__dirname, '../spec_diffs/', filename),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    diff(previous, types, {
      aColor: noColor,
      bColor: noColor,
      changeColor: noColor,
      commonColor: noColor,
      patchColor: noColor,
      expand: false,
      contextLines: 3,
    })!
  );
  previous = types;
}
