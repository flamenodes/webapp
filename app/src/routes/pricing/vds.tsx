import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/vds')({
  head: () => ({
    meta: seo({
      title: 'VDS Hosting Plans | Flame Nodes',
      description: 'Virtual dedicated servers with dedicated resources and full root access. The power of a dedicated server at a fraction of the cost.',
      keywords: 'VDS hosting, virtual dedicated server, dedicated resources, root access',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'VDS'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'VDS' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
