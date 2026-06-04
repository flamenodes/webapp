import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
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
  const navigate = useNavigate()
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'VPS'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'VPS' },
      }),
  })

  const plans: PricingCardProps['data'][] = data.map((product) => ({
    planName: product.planName,
    price: product.price,
    icon: product.icon ?? '/assets/gavtar.jpg',
    features: product.features ?? [],
    featureCategory: product.featureCategory ?? 'Features included',
    billingPeriod: '/month',
    currency: '₹',
    buttonLabel: 'Order',
    productId: product.id,
    onSelectPlan: () => {
      // Store product info for billing flow
      sessionStorage.setItem('selectedProduct', JSON.stringify({
        id: product.id,
        planName: product.planName,
        price: product.price,
        category: product.category,
      }))
      navigate({ to: '/billing/info' })
    },
  }))

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.planName} data={plan} />
      ))}
    </div>
  )
}
