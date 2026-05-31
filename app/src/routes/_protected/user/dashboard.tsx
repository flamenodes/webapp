import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Suspense, useEffect } from 'react'
import { HeroCard } from '#/components/user/dashboard/HeroCard'
import { ActiveServersCard } from '#/components/user/dashboard/ActiveServersCard'
import { UpdatesCard } from '#/components/user/dashboard/UpdatesCard'
import { NotificationsCard } from '#/components/user/dashboard/NotificationsCard'
import { GamePanelCard } from '#/components/user/dashboard/GamePanelCard'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getSession } from '#/handlers/auth.handler'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/user/dashboard')({
  head: () => ({
    meta: [{ title: 'My Dashboard | Flame Nodes' }],
  }),
  component: DashboardPage,
  validateSearch: (search: Record<string, unknown>) => ({
    paymentSuccess: search.paymentSuccess as boolean | undefined,
    orderId: search.orderId as string | undefined,
  }),
})

function DashboardPage() {
  const navigate = useNavigate()
  const { paymentSuccess, orderId } = Route.useSearch()
  const { data } = useSuspenseQuery({
    queryKey: ['session'],
    queryFn: () => getSession(),
  })

  useEffect(() => {
    if (paymentSuccess && orderId) {
      toast.success('Payment successful! Your servers are being deployed.')
      navigate({
        to: '/user/dashboard',
        search: {},
        replace: true,
      })
    }
  }, [paymentSuccess, orderId, navigate])

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="flex flex-col gap-4 p-4 md:p-5 lg:p-6">
        <Suspense>
          <HeroCard username={data?.user.name} avatar={data?.user.image} />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <ActiveServersCard />

          <div className="flex flex-col gap-5">
            <GamePanelCard email={data?.user.email ?? ''} />
            <UpdatesCard />
            <NotificationsCard />
          </div>
        </div>
      </div>
    </main>
  )
}
