import { build } from 'vite';
import config from './vite.config.ts';

async function main() {
  try {
    await build(config);
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();