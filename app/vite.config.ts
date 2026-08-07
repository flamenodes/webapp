import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import path from 'node:path'

const config = defineConfig({ 
  resolve: {
    tsconfigPaths: true,
    dedupe: ['three'],
    alias: {
      'three/addons/inspector/Inspector.js': path.resolve(__dirname, 'src/stubs/three-inspector-stub.js'),
      '@/generated/prisma/client': path.resolve(__dirname, 'src/generated/prisma/browser.ts'),
      '#/generated/prisma/client': path.resolve(__dirname, 'src/generated/prisma/browser.ts'),
    },
  },
  ssr: {
    // These packages access browser globals at module level — keep them out of SSR bundle
    external: [
      'three',
      'three-globe',
      'three-conic-polygon-geometry',
      '@react-three/fiber',
      '@react-three/drei',
      '@mr-fougere/react-trustpilot-widgets',
      'easyinvoice',
      'pdfjs-dist',
    ],
    noExternal: ['bullmq', 'ioredis', 'use-sync-external-store'],
  },
  optimizeDeps: {
    exclude: ['bullmq', 'ioredis', 'easyinvoice', 'pdfjs-dist'],
    include: [
      'use-sync-external-store/with-selector.js',
      'use-sync-external-store/shim/with-selector.js',
    ],
  },
  oxc: {
    exclude: ['**/Silk.tsx'],
  },
  plugins: [
    // kysely@0.29 moved DEFAULT_MIGRATION_TABLE/LOCK_TABLE to 'kysely/migration'.
    // @better-auth/kysely-adapter (bundled inside better-auth) still imports them
    // from the main entry, causing rolldown MISSING_EXPORT errors at build time.
    // This plugin intercepts the kysely main entry and appends the missing re-exports.
    {
      name: 'patch-kysely-migration-exports',
      enforce: 'pre',
      transform(code, id) {
        if (
          /[/\\]kysely[/\\]dist[/\\]index\.js$/.test(id) &&
          !code.includes('DEFAULT_MIGRATION_TABLE')
        ) {
          return {
            code: code + "\nexport { DEFAULT_MIGRATION_TABLE, DEFAULT_MIGRATION_LOCK_TABLE } from './migration/migrator.js';\n",
            map: null,
          }
        }
      },
    },
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
