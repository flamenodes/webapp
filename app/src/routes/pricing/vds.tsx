import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { QuickCheckoutSheet } from '#/components/billing/QuickCheckoutSheet'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { seo } from '#/utils/seo'
import { useState } from 'react'

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
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'VDS'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'VDS' },
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} data={plan} />
          ))}
        </div>
      </div>
      <QuickCheckoutSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        product={selectedProduct}
      />
    </>
  )
}
