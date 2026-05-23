import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Sidebar } from '#/components/dashboard/Sidebar'
import { Topbar } from '#/components/dashboard/Topbar'

export const Route = createFileRoute('/_protected/admin')({
  component: Dashboard,
})

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    setSidebarOpen(media.matches)
    const onChange = (e: MediaQueryListEvent) => setSidebarOpen(e.matches)
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div
        className={[
          'flex flex-col flex-1 min-w-0 overflow-hidden',
          'transition-[padding] duration-300 ease-out',
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-0',
        ].join(' ')}
      >
        <Topbar onMenuClick={() => setSidebarOpen((v) => !v)} />
        <Outlet />
      </div>
    </div>
  )
}
