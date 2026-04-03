import fs from 'fs';
import path from 'path';

(() => {
  const filePath = path.resolve('src', 'polkadot', 'augment-types.ts');
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf8');

  const fixedContent = content.replace(
    /ChainScopedMessage<Message>: ChainScopedMessage<Message>;/g,
    "'ChainScopedMessage<Message>': 'ChainScopedMessage<Message>';"
  );

  fs.writeFileSync(filePath, fixedContent);
  console.log('Fixed ChainScopedMessage type in augment-types.ts');
})();
