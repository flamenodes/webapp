import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import nprogress from 'nprogress'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })
  router.subscribe('onBeforeLoad', ({ pathChanged }) => {
    if (pathChanged) {
      nprogress.start()
    }
  })

  router.subscribe('onLoad', () => {
    nprogress.done()
  })
  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
