import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/protection')({
  head: () => ({
    meta: seo({
      title: 'DDoS Protection Plans | Flame Nodes',
      description: 'Enterprise-grade DDoS protection to keep your servers online. Automatic mitigation, real-time monitoring, and multi-layer defense.',
      keywords: 'DDoS protection, DDoS mitigation, server protection, attack prevention',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'DDOS_PROT'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'DDOS_PROT' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
