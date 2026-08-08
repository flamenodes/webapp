import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/dedicated')({
  head: () => ({
    meta: seo({
      title: 'Dedicated Servers | Flame Nodes',
      description: 'Bare-metal dedicated servers with exclusive hardware. Maximum performance, full control, and enterprise-grade reliability.',
      keywords: 'dedicated server, bare metal, dedicated hosting, enterprise server',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'DEDICATED'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'DEDICATED' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
