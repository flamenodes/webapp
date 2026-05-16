import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Sidebar } from '#/components/dashboard/Sidebar'
import { Topbar } from '#/components/dashboard/Topbar'
import { StatCard } from '#/components/dashboard/StatCard'
import { DonutChart } from '#/components/dashboard/DonutChart'
import { ResourceGauges } from '#/components/dashboard/ResourceGauges'
import { ActivityFeed } from '#/components/dashboard/ActivityFeed'
import { AlertPanel } from '#/components/dashboard/AlertPanel'
import { NodeTable } from '#/components/dashboard/NodeTable'
import { QuickActions } from '#/components/dashboard/QuickActions'
import { dashboardStats } from '#/data/dashboard/mockData'

export const Route = createFileRoute('/_protected/admin/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto">
          <div className="px-5 py-6 max-w-screen-2xl mx-auto space-y-6">
            {/* Page title */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Welcome back — here's what's happening across your
                infrastructure.
              </p>
            </div>

            {/* Alerts */}

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
              {dashboardStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Middle row: donut + gauges + quick actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <DonutChart />
              <ResourceGauges />
              <AlertPanel />
            </div>

            {/* Bottom row: table + activity */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-2">
                <NodeTable />
              </div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
