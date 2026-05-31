import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProductsByCategory } from '#/serverActions/products/product.api'
import { addToCart } from '#/serverActions/cart/cart.api'
import { seo } from '#/utils/seo'
import { toast } from 'sonner'

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
  const queryClient = useQueryClient()
  const { data } = useSuspenseQuery({
    queryKey: ['pricing-products', 'VDS'],
    queryFn: () =>
      getProductsByCategory({
        data: { category: 'VDS' },
      }),
  })

  const addToCartMutation = useMutation({
    mutationFn: (productId: string) =>
      addToCart({
        data: {
          productId,
          quantity: 1,
          billingPeriod: 'MONTHLY',
        },
      }),
    onSuccess: (result) => {
      if (result.success) {
        toast.success('Added to cart')
        queryClient.invalidateQueries({ queryKey: ['user-cart'] })
      } else {
        toast.error(result.message)
      }
    },
    onError: () => {
      toast.error('Failed to add to cart')
    },
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
    onSelectPlan: () => addToCartMutation.mutate(product.id),
  }))

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {plans.map((plan) => (
        <PricingCard key={plan.planName} data={plan} />
      ))}
    </div>
  )
}
