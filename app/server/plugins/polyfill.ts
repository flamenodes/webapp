// Polyfill browser-only globals for packages (e.g. @react-three/drei) that
// reference them at module evaluation time. Runs before any request is served.
//
// Nitro v3 removed auto-imports, so `definePlugin` must be imported explicitly.
import { definePlugin } from 'nitro'

export default definePlugin(() => {
  if (typeof globalThis.self === 'undefined') {
    ;(globalThis as any).self = globalThis
  }
  if (typeof globalThis.window === 'undefined') {
    ;(globalThis as any).window = undefined
  }
})
