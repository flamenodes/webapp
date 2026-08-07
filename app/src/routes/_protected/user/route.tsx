import { useEffect, useState } from 'react'
import { DashboardSidebar } from '#/components/user/dashboard/DashboardSidebar'
import { DashboardTopbar } from '#/components/user/dashboard/DashboardTopbar'
import { TicketFloatingWidget } from '#/components/tickets/TicketFloatingWidget'
import { Outlet, createFileRoute, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user')({
  component: UserLayout,
})

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isTicketsPage = pathname.startsWith('/user/tickets')

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    setSidebarOpen(media.matches)
    const onChange = (e: MediaQueryListEvent) => setSidebarOpen(e.matches)
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div
        className={[
          'flex flex-1 flex-col min-w-0',
          'transition-[padding] duration-300 ease-out',
          sidebarOpen ? 'lg:pl-[240px]' : 'lg:pl-0',
        ].join(' ')}
      >
        <DashboardTopbar
          onMenuClick={() => setSidebarOpen((v) => !v)}
        />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {!isTicketsPage && <TicketFloatingWidget />}
    </div>
  )
}
