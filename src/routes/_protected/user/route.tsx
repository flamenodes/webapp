import { useState } from 'react'
import { DashboardSidebar } from '#/components/user/dashboard/DashboardSidebar'
import { DashboardTopbar } from '#/components/user/dashboard/DashboardTopbar'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user')({
  component: UserLayout,
})

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <DashboardTopbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
