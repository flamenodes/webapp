import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ProductCard } from '#/components/billing/ProductCard'
import { AddonCard } from '#/components/billing/AddonCard'
import { LocationSelector } from '#/components/billing/LocationSelector'
import { OSSelector } from '#/components/billing/OSSelector'
import { OrderSummary } from '#/components/billing/OrderSummary'
import { TrustSection } from '#/components/billing/TrustSection'
import { cartData } from '#/data/billing/cartData'


export const Route = createFileRoute('/billing/configure')({
  component: CartPage,
})

function CartPage() {
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())

  const handleAddonToggle = (id: string, selected: boolean) => {
    const newAddons = new Set(selectedAddons)
    if (selected) {
      newAddons.add(id)
    } else {
      newAddons.delete(id)
    }
    setSelectedAddons(newAddons)
  }

  return (


    <div className="flex-1 overflow-auto p-20  w-full">

      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl font-bold text-foreground">Your cart</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete your hosting setup by reviewing and finalizing your order
          </p>
        </div>


        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ProductCard product={cartData.product} />
            <div className="space-y-4">
              {cartData.addons.map((addon) => (
                <AddonCard
                  key={addon.id}
                  addon={addon}
                  onToggle={handleAddonToggle}
                />
              ))}
            </div>

            {/* Location Selector */}
            <LocationSelector locations={cartData.locations} />

            {/* OS Selector */}
            <OSSelector operatingSystems={cartData.operatingSystems} />

            {/* Trust Section */}
            <TrustSection items={cartData.trust.items} />
          </div>

          {/* Right Column - Order Summary (Sticky) */}
          <div className="lg:col-span-1">
            <OrderSummary
              items={cartData.orderSummary.items}
              total={cartData.orderSummary.total}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
