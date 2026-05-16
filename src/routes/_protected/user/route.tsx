import {  useState } from 'react'
import { DashboardSidebar } from '#/components/user/dashboard/DashboardSidebar'
import { DashboardTopbar } from '#/components/user/dashboard/DashboardTopbar'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user')({
  component: UserLayout,
})

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
        <div className="flex h-screen overflow-hidden bg-background">

    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />
      <Outlet/>
      </div>
    </div>
    </div>
  )
}
