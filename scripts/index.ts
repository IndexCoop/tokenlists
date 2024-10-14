import fs from 'node:fs';
import path from 'node:path';
import { validate } from './validate';
import tokenlistUpdate from '@/src/tokenlist.json';
import tokenlistBase from '../indexcoop.tokenlist.json';
import { updateTokenListVersion } from './version';

const run = async () => {
  await validate(tokenlistUpdate);

  const updated = updateTokenListVersion(tokenlistBase, tokenlistUpdate, {
    major: false,
    minor: false,
    patch: false,
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../indexcoop.tokenlist.json'),
    JSON.stringify(updated, null, 2),
  );
};

run();
