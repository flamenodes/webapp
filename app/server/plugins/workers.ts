// Starts the BullMQ workers inside the Nitro server process.
//
// Nitro v3 removed auto-imports, so `definePlugin` must be imported explicitly
// (the old bare `defineNitroPlugin` global is gone). The plugin is registered
// explicitly in `vite.config.ts` because Nitro does not scan `server/plugins/`
// by default — without that, this file never reached the build and the
// `server-deployment` queue had no consumer in production.
//
// If you scale to multiple server replicas, set `DISABLE_INLINE_WORKERS=true` on
// the web containers and run the workers in a separate process instead
// (`bun run workers`), so each job is only processed once.
import { definePlugin } from 'nitro'

function startWorker(name: string, load: () => Promise<unknown>) {
  load()
    .then(() => console.log(`✅ ${name} worker initialized`))
    .catch((err: any) => {
      console.warn(`⚠️  ${name} worker skipped:`, err?.message ?? err)
    })
}

export default definePlugin(() => {
  if (process.env.DISABLE_INLINE_WORKERS === 'true') {
    console.log('🔧 DISABLE_INLINE_WORKERS=true — background workers not started in this process')
    return
  }

  console.log('🔧 Initializing background workers...')

  setTimeout(() => {
    startWorker('Deployment', () =>
      import('../../src/serverActions/queue/deployment-worker'),
    )
    startWorker('Email', () => import('../../src/serverActions/queue/email-worker'))
    startWorker('Expiration', () =>
      import('../../src/serverActions/queue/expiration-worker'),
    )
  }, 1000)
})
