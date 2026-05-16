import { createFileRoute } from '@tanstack/react-router'
import { Suspense, useState } from 'react'
import { HeroCard } from '#/components/user/dashboard/HeroCard'
import { ActiveServersCard } from '#/components/user/dashboard/ActiveServersCard'
import { UpdatesCard } from '#/components/user/dashboard/UpdatesCard'
import { NotificationsCard } from '#/components/user/dashboard/NotificationsCard'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getSession } from '#/handlers/auth.handler'

export const Route = createFileRoute('/_protected/user/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['session'],
    queryFn: () => getSession(),
  })

  return (
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 p-4 md:p-5 lg:p-6">
          <Suspense>
            <HeroCard username={data?.user.name} avatar={data?.user.image} />
          </Suspense>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <ActiveServersCard />

            <div className="flex flex-col gap-5">
              <UpdatesCard />
              <NotificationsCard />
            </div>
          </div>
        </div>
      </main>
  )
}
