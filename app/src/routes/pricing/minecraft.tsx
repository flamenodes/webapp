import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { seo } from '#/utils/seo'
import { Suspense } from 'react'

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
  const navigate = useNavigate()
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'MINECRAFT'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'MINECRAFT' },
      }),
  })

  const plans: PricingCardProps['data'][] = data.map((product) => ({
    planName: product.planName,
    price: product.price,
    icon: product.icon ?? '/assets/gavtar.jpg',
    features: product.features,
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
      <Suspense>
        {plans.map((plan) => (
          <PricingCard key={plan.planName} data={plan} />
        ))}
      </Suspense>
    </div>
  )
}
