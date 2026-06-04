import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Label } from '#/components/ui/label'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { Spotlight } from '#/components/ui/spotlight-new'
import { ArrowRight, Package, Cpu, HardDrive, Zap, Check } from 'lucide-react'

export const Route = createFileRoute('/_protected/billing/info')({
  component: BillingInfoPage,
})

type BillingPeriod = 'MONTHLY' | 'QUARTERLY' | 'YEARLY'

function BillingInfoPage() {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('MONTHLY')
  const [ram, setRam] = useState('4')
  const [storage, setStorage] = useState('50')
  const [cpu, setCpu] = useState('2')

  const billingPeriods = [
    { value: 'MONTHLY', label: 'Monthly', discount: 0, months: 1 },
    { value: 'QUARTERLY', label: 'Quarterly', discount: 5, months: 3 },
    { value: 'YEARLY', label: 'Yearly', discount: 15, months: 12 },
  ]

  const basePrice = 599
  const ramPrice = parseInt(ram) * 50
  const storagePrice = parseInt(storage) * 10
  const cpuPrice = parseInt(cpu) * 200

  const totalMonthly = basePrice + ramPrice + storagePrice + cpuPrice
  const periodData = billingPeriods.find(p => p.value === billingPeriod)!
  const discount = (totalMonthly * periodData.months * periodData.discount) / 100
  const totalPrice = (totalMonthly * periodData.months * quantity) - discount

  const handleContinue = () => {
    // Store config in session/state
    sessionStorage.setItem('billingConfig', JSON.stringify({
      quantity,
      billingPeriod,
      ram,
      storage,
      cpu,
      totalPrice,
    }))
    navigate({ to: '/billing/address' })
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
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
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
            Configure Your Server
          </h1>
          <p className="text-lg text-muted-foreground">
            Step 1 of 3: Customize your hosting plan
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">Configuration</span>
            <span className="text-sm text-muted-foreground">Billing Details</span>
            <span className="text-sm text-muted-foreground">Payment</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-primary to-primary/80 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Period */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Billing Period
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {billingPeriods.map((period) => (
                      <button
                        key={period.value}
                        onClick={() => setBillingPeriod(period.value as BillingPeriod)}
                        className={`relative p-4 rounded-xl border-2 transition-all ${
                          billingPeriod === period.value
                            ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                            : 'border-border hover:border-primary/50 bg-card/50'
                        }`}
                      >
                        <div className="text-sm font-semibold">{period.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">{period.months} month{period.months > 1 ? 's' : ''}</div>
                        {period.discount > 0 && (
                          <div className="text-xs text-primary font-medium mt-2">
                            Save {period.discount}%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
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
                      -
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

            {/* Server Configuration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" />
                    Server Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block">CPU Cores</Label>
                    <Select value={cpu} onValueChange={setCpu}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Cores (+₹400/mo)</SelectItem>
                        <SelectItem value="4">4 Cores (+₹800/mo)</SelectItem>
                        <SelectItem value="8">8 Cores (+₹1600/mo)</SelectItem>
                        <SelectItem value="16">16 Cores (+₹3200/mo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block">RAM (GB)</Label>
                    <Select value={ram} onValueChange={setRam}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 GB (+₹200/mo)</SelectItem>
                        <SelectItem value="8">8 GB (+₹400/mo)</SelectItem>
                        <SelectItem value="16">16 GB (+₹800/mo)</SelectItem>
                        <SelectItem value="32">32 GB (+₹1600/mo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block">Storage (GB SSD)</Label>
                    <Select value={storage} onValueChange={setStorage}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50">50 GB (+₹500/mo)</SelectItem>
                        <SelectItem value="100">100 GB (+₹1000/mo)</SelectItem>
                        <SelectItem value="250">250 GB (+₹2500/mo)</SelectItem>
                        <SelectItem value="500">500 GB (+₹5000/mo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Order Summary - Sticky */}
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
                      <span className="text-muted-foreground">Base Plan</span>
                      <span className="font-medium">₹{basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{cpu} CPU Cores</span>
                      <span className="font-medium">₹{cpuPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{ram} GB RAM</span>
                      <span className="font-medium">₹{ramPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{storage} GB Storage</span>
                      <span className="font-medium">₹{storagePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="font-medium">×{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Period</span>
                      <span className="font-medium">{periodData.label}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({periodData.discount}%)</span>
                        <span className="font-medium">-₹{discount.toFixed(2)}</span>
                      </div>
                    )}
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
