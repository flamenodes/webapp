import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/vps')({
  head: () => ({
    meta: seo({
      title: 'VPS Hosting Plans | Flame Nodes',
      description: 'Powerful virtual private servers with guaranteed CPU and RAM. Full root access, NVMe SSD storage, and 99.9% uptime guarantee.',
      keywords: 'VPS hosting, virtual private server, cloud VPS, root access, NVMe SSD',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'VPS'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'VPS' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
