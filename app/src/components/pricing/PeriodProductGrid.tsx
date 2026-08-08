import React, { Suspense, useState } from 'react'
import PricingCard from '#/components/pricing/PricingCard'
import type { PricingCardProps } from '#/components/pricing/PricingCard'
import { QuickCheckoutSheet } from '#/components/billing/QuickCheckoutSheet'

const PERIOD_LABELS: Record<string, string> = {
  HOURLY: '/hour',
  DAILY: '/day',
  MONTHLY: '/month',
  QUARTERLY: '/3 months',
  SEMIANNUALLY: '/6 months',
  YEARLY: '/year',
}

interface PeriodProductGridProps {
  products: Array<{
    id: string
    planName: string
    price: number
    icon?: string | null
    features?: string[]
    featureCategory?: string | null
    billingOptions?: Array<{ billingPeriod: string; price: number }>
  }>
}

/**
 * Product grid with a billing-period price filter.
 * Shows a per-period price on every card and pre-stocks the checkout
 * sheet with the selected period.
 */
export function PeriodProductGrid({ products }: PeriodProductGridProps) {
  // Union of billing periods actually available across all products
  const periods = Array.from(
    new Set(
      products.flatMap((p) => p.billingOptions?.map((o) => o.billingPeriod) ?? []),
    ),
  )

  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    periods.includes('MONTHLY') ? 'MONTHLY' : periods[0] ?? 'MONTHLY',
  )
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const plans: PricingCardProps['data'][] = products.map((product) => {
    const option = product.billingOptions?.find(
      (o) => o.billingPeriod === selectedPeriod,
    )
    return {
      planName: product.planName,
      price: option?.price ?? product.price,
      icon: product.icon ?? '/assets/gavtar.jpg',
      features: product.features ?? [],
      featureCategory: product.featureCategory ?? 'Features included',
      billingPeriod: PERIOD_LABELS[selectedPeriod] ?? '/month',
      currency: '₹',
      buttonLabel: 'Order',
      productId: product.id,
      onSelectPlan: () => {
        setSelectedProduct(product)
        setSheetOpen(true)
      },
    }
  })

  return (
    <>
      {periods.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {periods.map((period) => {
            const active = selectedPeriod === period
            return (
              <button
                key={period}
                type="button"
                onClick={() => setSelectedPeriod(period)}
                className={`h-9 px-4 rounded-full text-sm font-medium border transition-all duration-200 ${
                  active
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40'
                }`}
              >
                {PERIOD_LABELS[period] ?? period.toLowerCase()}
              </button>
            )
          })}
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <Suspense>
            {plans.map((plan) => (
              <PricingCard key={plan.productId ?? plan.planName} data={plan} />
            ))}
          </Suspense>
        </div>
      </div>

      <QuickCheckoutSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        product={selectedProduct}
        initialBillingPeriod={selectedPeriod}
      />
    </>
  )
}

export default PeriodProductGrid
