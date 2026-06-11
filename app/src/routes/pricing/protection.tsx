import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { QuickCheckoutSheet } from '#/components/billing/QuickCheckoutSheet'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'
import { useState } from 'react'

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
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'DDOS_PROT'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'DDOS_PROT' },
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
      setSelectedProduct(product)
      setSheetOpen(true)
    },
  }))

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.planName} data={plan} />
        ))}
      </div>
      <QuickCheckoutSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        product={selectedProduct}
      />
    </>
  )
}
