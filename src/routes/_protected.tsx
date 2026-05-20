import { getSession } from '#/handlers/auth.handler'
import { hasPermissionFn } from '#/lib/has-permission'
import { hasPermissionClient } from '#/lib/has-permission-client'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ location }) => {
    const session = await getSession()
    if (!session) {
      throw redirect({
        to: '/login',
      })
    }
    if (location.pathname.startsWith('/admin')) {
      const canAccess = await hasPermissionFn({
        data: { permissions: { dashboard: ['admin'] } },
      })
      if (!canAccess) {
        throw redirect({
          to: '/user/dashboard',
        })
      }
    }
  },
  component: () => <Outlet />,
})
