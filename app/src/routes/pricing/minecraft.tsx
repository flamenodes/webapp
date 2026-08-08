import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/minecraft')({
  head: () => ({
    meta: seo({
      title: 'Minecraft Server Hosting | Flame Nodes',
      description:
        'Low-latency Minecraft hosting optimized with Ryzen 9 processors. One-click modpack install, DDoS protection, and instant setup.',
      keywords:
        'Minecraft hosting, Minecraft server, game server hosting, modpack, Ryzen 9',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'MINECRAFT'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'MINECRAFT' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
