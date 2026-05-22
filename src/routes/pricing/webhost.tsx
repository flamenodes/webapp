import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'

export const Route = createFileRoute('/pricing/webhost')({
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

  const plans: PricingCardProps['data'][] = data.map((product) => ({
    planName: product.planName,
    price: product.price,
    icon: product.icon ?? '/assets/gavtar.jpg',
    features: product.features ?? [],
    featureCategory: product.featureCategory ?? 'Features included',
    billingPeriod: '/month',
    currency: '₹',
    buttonLabel: 'Get started',
  }))

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.planName} data={plan} />
      ))}
    </div>
  )
}
