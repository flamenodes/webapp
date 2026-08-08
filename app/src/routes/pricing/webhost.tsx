import PeriodProductGrid from '#/components/pricing/PeriodProductGrid'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'

export const Route = createFileRoute('/pricing/webhost')({
  head: () => ({
    meta: seo({
      title: 'Web Hosting Plans | Flame Nodes',
      description: 'Fast and reliable web hosting with free SSL, daily backups, and NVMe SSD storage. Perfect for WordPress, Node.js, and more.',
      keywords: 'web hosting, WordPress hosting, Node.js hosting, SSL, NVMe SSD',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'WEBHOST'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'WEBHOST' },
      }),
  })

  return <PeriodProductGrid products={data} />
}
