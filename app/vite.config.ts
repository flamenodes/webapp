import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import path from 'path'

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    dedupe: ['three'],
    alias: {
      'three/addons/inspector/Inspector.js': path.resolve(__dirname, 'src/stubs/three-inspector-stub.js'),
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
      // kysely-adapter references kysely exports not present in v0.29
      '@better-auth/kysely-adapter',
    ],
    noExternal: [],
  },
  oxc: {
    exclude: ['**/Silk.tsx'],
  },
  plugins: [
    devtools(),
    nitro({
      rollupConfig: {
        external: [
          /^@sentry\//,
          // kysely-adapter imports kysely internals removed in v0.29; keep external so nitro doesn't inline it
          /^@better-auth\/kysely-adapter/,
        ],
      },
      serverDir: "./src/server",
      experimental: { websocket: true },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
