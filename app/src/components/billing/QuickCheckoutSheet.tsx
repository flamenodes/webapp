import React, { useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '#/components/ui/sheet'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import { Input } from '#/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Loader2, Package, Zap, Cpu } from 'lucide-react'
import { getConfigurationOptions } from '#/serverActions/configuration/configuration.api'
import { toast } from 'sonner'

interface QuickCheckoutSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: any
}

type BillingPeriod = 'HOURLY' | 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUALLY' | 'YEARLY' | 'CUSTOM'

export const QuickCheckoutSheet: React.FC<QuickCheckoutSheetProps> = ({
  open,
  onOpenChange,
  product,
}) => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(
    product?.billingOptions?.[0]?.billingPeriod || 'MONTHLY'
  )
  const [configurations, setConfigurations] = useState<any[]>([])
  const [configValues, setConfigValues] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open && product && configurations.length === 0) {
      fetchConfigurations()
    }
  }, [open])

  const fetchConfigurations = async () => {
    if (!product?.category) return
    try {
      setLoading(true)
      const configs = await getConfigurationOptions({
        data: { category: product.category },
      })
      setConfigurations(configs)
    } catch (error: any) {
      console.error('Failed to fetch configurations:', error)
      // Don't show error toast, just continue without configurations
    } finally {
      setLoading(false)
    }
  }

  const handleCheckout = () => {
    // Validate required configurations
    const requiredMissing = configurations.filter(c => c.required && !configValues[c.id])
    if (requiredMissing.length > 0) {
      toast.error(`Please fill in: ${requiredMissing.map((c: any) => c.label).join(', ')}`)
      return
    }

    // Calculate total price
    let basePrice = product.price
    const billingOption = product.billingOptions?.find(
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
    const totalPrice = (basePrice + addonPrice) * quantity

    // Store configuration in session storage
    sessionStorage.setItem('billingConfig', JSON.stringify({
      productId: product.id,
      productName: product.planName,
      quantity,
      billingPeriod,
      configuration: configValues,
      totalPrice,
    }))

    onOpenChange(false)
    navigate({ to: '/billing/address' })
  }

  if (!product) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-[540px] overflow-y-auto p-0">
        <div className="p-6">
          <SheetHeader className="p-0">
            <SheetTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Configure & Checkout
            </SheetTitle>
            <SheetDescription>
              Select quantity, billing period, and configuration for {product.planName}
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="space-y-6 px-6 pb-6">
          {/* Product Summary */}
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{product.planName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end">
                <div className="text-muted-foreground text-sm capitalize">
                  {product.category?.toLowerCase()}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">₹{product.price}</div>
                  <div className="text-xs text-muted-foreground">base price</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Period */}
          {product.billingOptions && product.billingOptions.length > 0 && (
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Billing Period
              </Label>
              <Select value={billingPeriod} onValueChange={(value) => setBillingPeriod(value as BillingPeriod)}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {product.billingOptions.map((option: any) => {
                    const label = option.billingPeriod === 'CUSTOM' && option.customDays
                      ? `${option.customDays} Days`
                      : option.billingPeriod
                    return (
                      <SelectItem key={option.id || option.billingPeriod} value={option.billingPeriod}>
                        {label} - ₹{option.price}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              Quantity
            </Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10 rounded-lg"
              >
                −
              </Button>
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-primary">{quantity}</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10 rounded-lg"
              >
                +
              </Button>
            </div>
          </div>

          {/* Configurations */}
          {configurations.length > 0 && (
            <div className="space-y-3">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Configuration
              </Label>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                </div>
              ) : (
                <div className="space-y-4">
                  {configurations.map((config) => (
                    <div key={config.id} className="space-y-2">
                      <Label className="text-sm font-medium">
                        {config.label}
                        {config.required && <span className="text-destructive ml-1">*</span>}
                      </Label>
                      {config.description && (
                        <p className="text-xs text-muted-foreground">{config.description}</p>
                      )}

                      {config.type === 'SELECT' && (
                        <Select
                          value={configValues[config.id] || ''}
                          onValueChange={(value) =>
                            setConfigValues({ ...configValues, [config.id]: value })
                          }
                        >
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder={`Select ${config.label}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {config.values.map((value: any) => (
                              <SelectItem key={value.value} value={value.value}>
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
                        <div className="grid grid-cols-2 gap-3">
                          {config.values.map((value: any) => {
                            const isSelected = configValues[config.id] === value.value
                            return (
                              <button
                                key={value.id}
                                type="button"
                                onClick={() => setConfigValues({ ...configValues, [config.id]: value.value })}
                                className={`relative p-3 rounded-lg border-2 transition-all text-left ${
                                  isSelected
                                    ? 'border-primary bg-primary/10 shadow-lg'
                                    : 'border-border hover:border-primary/50 bg-card'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {value.metadata?.icon && (
                                    <img
                                      src={value.metadata.icon}
                                      alt=""
                                      className="w-6 h-6 object-contain shrink-0"
                                    />
                                  )}
                                  <div>
                                    <div className="font-semibold text-sm">{value.label}</div>
                                    {value.description && (
                                      <div className="text-xs text-muted-foreground mt-0.5">{value.description}</div>
                                    )}
                                  </div>
                                </div>
                                {value.priceModifier !== 0 && (
                                  <div className={`text-xs font-medium mt-1 ${
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
                          className="h-10"
                          required={config.required}
                        />
                      )}

                      {config.type === 'NUMBER' && (
                        <Input
                          type="number"
                          value={configValues[config.id] || ''}
                          onChange={(e) => setConfigValues({ ...configValues, [config.id]: e.target.value })}
                          placeholder={`Enter ${config.label.toLowerCase()}`}
                          className="h-10"
                          required={config.required}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Checkout Button */}
          <Button
            onClick={handleCheckout}
            size="lg"
            className="w-full h-10 mt-8"
          >
            Continue Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
