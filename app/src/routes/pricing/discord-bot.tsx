import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/discord-bot')({
  head: () => ({
    meta: seo({
      title: 'Discord Bot Hosting | Flame Nodes',
      description: 'Always-online hosting for your Discord bots. 24/7 uptime, instant deployment, and affordable plans for bots of any size.',
      keywords: 'Discord bot hosting, Discord bot server, 24/7 bot hosting, bot deployment',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'DISCORD'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'DISCORD' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
