import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import path from 'node:path'

const config = defineConfig({
  optimizeDeps: {
    include: ['radix-ui'],
  },
  resolve: {
    tsconfigPaths: true,
    dedupe: ['three'],
    alias: {
      'three/addons/inspector/Inspector.js': path.resolve(
        __dirname,
        'src/stubs/three-inspector-stub.js',
      ),
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
    ],
    noExternal: ['@radix-ui/*'],
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
            code:
              code +
              "\nexport { DEFAULT_MIGRATION_TABLE, DEFAULT_MIGRATION_LOCK_TABLE } from './migration/migrator.js';\n",
            map: null,
          }
        }
      },
    },
    devtools(),
    nitro({
      preset: 'node-server',
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
