import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ProductCard } from '#/components/billing/ProductCard'
import { AddonCard } from '#/components/billing/AddonCard'
import { LocationSelector } from '#/components/billing/LocationSelector'
import { OSSelector } from '#/components/billing/OSSelector'
import { OrderSummary } from '#/components/billing/OrderSummary'
import { TrustSection } from '#/components/billing/TrustSection'
import { cartData } from '#/data/billing/cartData'
import { Button } from '#/components/ui/button'
import { motion } from 'motion/react'
import { InfoIcon } from 'lucide-react'


export const Route = createFileRoute('/billing/configure')({
  head: () => ({
    meta: [{ title: 'Configure Plan | Flame Nodes' }],
  }),
  component: CartPage,
})

function CartPage() {
  const navigate = useNavigate()
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())
  const [billingPeriod, setBillingPeriod] = useState('24')
  const [quantity, setQuantity] = useState(1)

  const handleAddonToggle = (id: string, selected: boolean) => {
    const newAddons = new Set(selectedAddons)
    if (selected) {
      newAddons.add(id)
    } else {
      newAddons.delete(id)
    }
    setSelectedAddons(newAddons)
  }

  const billingPeriods = [
    { value: '1', label: '1 Month', discount: 0 },
    { value: '3', label: '3 Months', discount: 5 },
    { value: '6', label: '6 Months', discount: 10 },
    { value: '12', label: '12 Months', discount: 15 },
    { value: '24', label: '24 Months', discount: 25 },
  ]

  const handleContinueToBilling = () => {
    // Store configuration
    sessionStorage.setItem('billingConfig', JSON.stringify({
      quantity,
      billingPeriod,
      selectedAddons: Array.from(selectedAddons),
      product: cartData.product,
      totalPrice: cartData.orderSummary.total.value,
    }))
    navigate({ to: '/billing/cart' })
  }

  return (
    <div className="flex-1 overflow-auto w-full relative">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground mb-4">
            Configure Your Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your hosting solution with powerful add-ons and configurations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Period & Quantity Section */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card/50 via-card/30 to-card/50 backdrop-blur-xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
              <div className="relative">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">⚡</span> Billing Configuration
                </h3>
                
                {/* Billing Period */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 text-muted-foreground">
                    Billing Period
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {billingPeriods.map((period) => (
                      <button
                        key={period.value}
                        onClick={() => setBillingPeriod(period.value)}
                        className={`relative p-3 rounded-xl border-2 transition-all ${
                          billingPeriod === period.value
                            ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                            : 'border-border hover:border-primary/50 bg-card/50'
                        }`}
                      >
                        <div className="text-sm font-semibold">{period.label}</div>
                        {period.discount > 0 && (
                          <div className="text-xs text-primary font-medium mt-1">
                            Save {period.discount}%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-muted-foreground">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 rounded-xl border-2"
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-3xl font-bold text-primary">{quantity}</div>
                      <div className="text-xs text-muted-foreground">Server{quantity > 1 ? 's' : ''}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-12 w-12 rounded-xl border-2"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductCard product={cartData.product} />
            </motion.div>

            {/* Add-ons */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-2">
                <h3 className="text-xl font-semibold">Enhance Your Plan</h3>
                <InfoIcon className="text-muted-foreground h-4 w-4" />
              </div>
              {cartData.addons.map((addon) => (
                <AddonCard
                  key={addon.id}
                  addon={addon}
                  onToggle={handleAddonToggle}
                />
              ))}
            </motion.div>

            {/* Location Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LocationSelector locations={cartData.locations} />
            </motion.div>

            {/* OS Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <OSSelector operatingSystems={cartData.operatingSystems} />
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TrustSection items={cartData.trust.items} />
            </motion.div>
          </div>

          {/* Right Column - Order Summary (Sticky) */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="sticky top-6">
              <OrderSummary
                items={cartData.orderSummary.items}
                total={cartData.orderSummary.total}
                onContinue={handleContinueToBilling}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
