import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Spotlight } from '#/components/ui/spotlight-new'
import { ArrowRight, Package, Cpu, Zap, Check, Loader2, ShoppingCart } from 'lucide-react'
import { getProduct } from '#/serverActions/products/product.api'
import { getConfigurationOptions } from '#/serverActions/configuration/configuration.api'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/billing/cart')({
  component: BillingCartPage,
  head: () => ({ meta: [{ title: 'Your Cart | Flame Nodes' }] }),
  validateSearch: (search) => ({
    productId: (search as any)?.productId as string | undefined,
  }),
})

type BillingPeriod = 'HOURLY' | 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY'

function BillingCartPage() {
  const navigate = useNavigate()
  const { productId } = Route.useSearch()
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [configurations, setConfigurations] = useState<any[]>([])
  const [configValues, setConfigValues] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('MONTHLY')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!productId) {
      toast.error('No product selected')
      navigate({ to: '/pricing/vps' })
      return
    }
    async function fetchData() {
      try {
        const product = await getProduct({ data: { id: productId! } })
        setSelectedProduct(product)
        if (product.billingOptions?.length > 0) {
          setBillingPeriod(product.billingOptions[0].billingPeriod)
        }
        const configs = await getConfigurationOptions({ data: { category: product.category } })
        setConfigurations(configs)
      } catch (error: any) {
        toast.error(error.message || 'Failed to load product')
        navigate({ to: '/pricing/vps' })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [productId])

  const calculatePrice = () => {
    if (!selectedProduct) return 0
    let basePrice = selectedProduct.price
    const billingOption = selectedProduct.billingOptions?.find(
      (opt: any) => opt.billingPeriod === billingPeriod
    )
    if (billingOption) basePrice = billingOption.price

    let addonPrice = 0
    configurations.forEach(config => {
      const selectedValue = configValues[config.id]
      if (selectedValue) {
        const value = config.values.find((v: any) => v.value === selectedValue)
        if (value?.priceModifier) addonPrice += value.priceModifier
      }
    })
    return (basePrice + addonPrice) * quantity
  }

  const totalPrice = calculatePrice()

  const handleContinue = () => {
    if (!selectedProduct) {
      toast.error('Please select a product')
      return
    }
    const requiredMissing = configurations.filter(c => c.required && !configValues[c.id])
    if (requiredMissing.length > 0) {
      toast.error(`Please fill in: ${requiredMissing.map((c: any) => c.label).join(', ')}`)
      return
    }
    sessionStorage.setItem('billingConfig', JSON.stringify({
      productId: selectedProduct.id,
      productName: selectedProduct.planName,
      quantity,
      billingPeriod,
      configuration: configValues,
      totalPrice,
    }))
    navigate({ to: '/billing/address' })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No products available</h2>
          <p className="text-muted-foreground">Please contact support</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 70%, .16) 0, hsla(0, 100%, 50%, .06) 50%, hsla(0, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(350, 100%, 75%, .12) 0, hsla(0, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(340, 100%, 65%, .08) 0, hsla(350, 100%, 50%, .03) 80%, transparent 100%)"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <ShoppingCart className="w-8 h-8 text-primary" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
              Your Cart
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Step 1 of 3 — Choose your plan and configuration
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">Cart</span>
            <span className="text-sm text-muted-foreground">Billing Details</span>
            <span className="text-sm text-muted-foreground">Payment</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-primary to-primary/80 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — configuration */}
          <div className="lg:col-span-2 space-y-6">

            {/* Selected Plan (read-only) */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    Selected Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
                    <div>
                      <div className="text-lg font-bold">{selectedProduct.planName}</div>
                      <div className="text-sm text-muted-foreground capitalize">{selectedProduct.category?.toLowerCase()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₹{selectedProduct.price}</div>
                      <div className="text-xs text-muted-foreground">base price</div>
                    </div>
                  </div>

                  {selectedProduct.features?.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedProduct.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Billing Period */}
            {selectedProduct.billingOptions?.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Billing Period
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProduct.billingOptions.map((option: any) => (
                        <button
                          key={option.billingPeriod}
                          onClick={() => setBillingPeriod(option.billingPeriod)}
                          className={`relative p-4 rounded-xl border-2 transition-all ${
                            billingPeriod === option.billingPeriod
                              ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                              : 'border-border hover:border-primary/50 bg-card/50'
                          }`}
                        >
                          <div className="text-sm font-semibold">{option.billingPeriod}</div>
                          <div className="text-lg font-bold text-primary mt-1">₹{option.price}</div>
                          <div className="text-xs text-muted-foreground mt-1">per period</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Quantity */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    Quantity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 rounded-xl border-2"
                    >
                      −
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-4xl font-bold text-primary">{quantity}</div>
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
                </CardContent>
              </Card>
            </motion.div>

            {/* Configuration Options from Admin Panel */}
            {configurations.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-primary" />
                      Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {configurations.map((config) => (
                      <div key={config.id}>
                        <Label className="mb-3 block text-base font-semibold">
                          {config.label}
                          {config.required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        {config.description && (
                          <p className="text-sm text-muted-foreground mb-3">{config.description}</p>
                        )}

                        {config.type === 'SELECT' && (
                          <Select
                            value={configValues[config.id] || ''}
                            onValueChange={(value) => setConfigValues({ ...configValues, [config.id]: value })}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder={`Select ${config.label}`} />
                            </SelectTrigger>
                            <SelectContent>
                              {config.values.map((value: any) => (
                                <SelectItem key={value.id} value={value.value}>
                                  <div className="flex items-center gap-2">
                                    {value.metadata?.icon && (
                                      <img src={value.metadata.icon} alt="" className="w-5 h-5 object-contain" />
                                    )}
                                    <span>{value.label}</span>
                                    {value.priceModifier > 0 && (
                                      <span className="text-green-600 text-xs">(+₹{value.priceModifier})</span>
                                    )}
                                    {value.priceModifier < 0 && (
                                      <span className="text-red-600 text-xs">(₹{value.priceModifier})</span>
                                    )}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}

                        {config.type === 'RADIO' && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {config.values.map((value: any) => {
                              const isSelected = configValues[config.id] === value.value
                              return (
                                <button
                                  key={value.id}
                                  type="button"
                                  onClick={() => setConfigValues({ ...configValues, [config.id]: value.value })}
                                  className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                                    isSelected
                                      ? 'border-primary bg-primary/10 shadow-lg'
                                      : 'border-border hover:border-primary/50 bg-card'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {value.metadata?.icon && (
                                      <img
                                        src={value.metadata.icon}
                                        alt=""
                                        className="w-8 h-8 object-contain shrink-0"
                                      />
                                    )}
                                    <div>
                                      <div className="font-semibold text-base">{value.label}</div>
                                      {value.description && (
                                        <div className="text-xs text-muted-foreground mt-0.5">{value.description}</div>
                                      )}
                                    </div>
                                  </div>
                                  {value.priceModifier !== 0 && (
                                    <div className={`text-xs font-medium mt-2 ${
                                      value.priceModifier > 0 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                      {value.priceModifier > 0 ? '+' : ''}₹{value.priceModifier}
                                    </div>
                                  )}
                                </button>
                              )
                            })}
                          </div>
                        )}

                        {config.type === 'TEXT' && (
                          <Input
                            value={configValues[config.id] || ''}
                            onChange={(e) => setConfigValues({ ...configValues, [config.id]: e.target.value })}
                            placeholder={`Enter ${config.label.toLowerCase()}`}
                            className="h-12"
                            required={config.required}
                          />
                        )}

                        {config.type === 'NUMBER' && (
                          <Input
                            type="number"
                            value={configValues[config.id] || ''}
                            onChange={(e) => setConfigValues({ ...configValues, [config.id]: e.target.value })}
                            placeholder={`Enter ${config.label.toLowerCase()}`}
                            className="h-12"
                            required={config.required}
                          />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Order Summary — sticky */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-6"
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plan</span>
                      <span className="font-medium">{selectedProduct.planName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Billing</span>
                      <span className="font-medium">{billingPeriod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-medium">×{quantity}</span>
                    </div>
                    {configurations.map(config => {
                      const selectedValue = configValues[config.id]
                      if (!selectedValue) return null
                      const value = config.values.find((v: any) => v.value === selectedValue)
                      if (!value) return null
                      return (
                        <div key={config.id} className="flex justify-between">
                          <span className="text-muted-foreground">{config.label}</span>
                          <span className="font-medium">
                            {value.label}
                            {value.priceModifier !== 0 && (
                              <span className={value.priceModifier > 0 ? 'text-green-600' : 'text-red-600'}>
                                {' '}({value.priceModifier > 0 ? '+' : ''}₹{value.priceModifier})
                              </span>
                            )}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-3xl font-bold text-primary">₹{totalPrice.toFixed(2)}</span>
                    </div>

                    <Button
                      onClick={handleContinue}
                      className="w-full h-12 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>24/7 Premium Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>99.9% Uptime SLA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
