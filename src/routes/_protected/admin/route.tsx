import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Sidebar } from '#/components/dashboard/Sidebar'
import { Topbar } from '#/components/dashboard/Topbar'

export const Route = createFileRoute('/_protected/admin')({
  component: Dashboard,
})

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <Outlet />
      </div>
    </div>
  )
}
