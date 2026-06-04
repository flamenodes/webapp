import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { Spotlight } from '#/components/ui/spotlight-new'
import { ArrowLeft, CreditCard, Check, ShieldCheck, Lock } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_protected/billing/payment')({
  component: BillingPaymentPage,
})

function BillingPaymentPage() {
  const navigate = useNavigate()
  const [config, setConfig] = useState<any>(null)
  const [address, setAddress] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const configData = sessionStorage.getItem('billingConfig')
    const addressData = sessionStorage.getItem('billingAddress')
    
    if (!configData || !addressData) {
      toast.error('Missing billing information')
      navigate({ to: '/billing/info' })
      return
    }

    setConfig(JSON.parse(configData))
    setAddress(JSON.parse(addressData))
  }, [navigate])

  const handlePayment = async () => {
    setLoading(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Payment successful! Redirecting...')
    
    // Clear session storage
    sessionStorage.removeItem('billingConfig')
    sessionStorage.removeItem('billingAddress')
    
    // Redirect to success page or dashboard
    setTimeout(() => {
      navigate({ to: '/user/dashboard' })
    }, 1500)
  }

  if (!config || !address) {
    return null
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 70%, .16) 0, hsla(0, 100%, 50%, .06) 50%, hsla(0, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(350, 100%, 75%, .12) 0, hsla(0, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(340, 100%, 65%, .08) 0, hsla(350, 100%, 50%, .03) 80%, transparent 100%)"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
            Review & Payment
          </h1>
          <p className="text-lg text-muted-foreground">
            Step 3 of 3: Review your order and complete payment
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Configuration</span>
            <span className="text-sm text-muted-foreground">Billing Details</span>
            <span className="text-sm font-medium text-primary">Payment</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-primary to-primary/80 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Review */}
          <div className="lg:col-span-2 space-y-6">
            {/* Configuration Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle>Configuration Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="text-muted-foreground mb-1">CPU Cores</div>
                      <div className="text-2xl font-bold text-primary">{config.cpu}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="text-muted-foreground mb-1">RAM</div>
                      <div className="text-2xl font-bold text-primary">{config.ram} GB</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="text-muted-foreground mb-1">Storage</div>
                      <div className="text-2xl font-bold text-primary">{config.storage} GB</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="text-muted-foreground mb-1">Quantity</div>
                      <div className="text-2xl font-bold text-primary">{config.quantity}</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Billing Period</span>
                      <span className="font-semibold">{config.billingPeriod}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Billing Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="font-semibold text-lg">
                      {address.firstName} {address.lastName}
                    </div>
                    <div className="text-muted-foreground">{address.email}</div>
                    <div className="text-muted-foreground">{address.phone}</div>
                    <div className="mt-4 pt-4 border-t">
                      <div>{address.address}</div>
                      <div>{address.city}, {address.state} {address.zipCode}</div>
                      <div>{address.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">SSL Encrypted</div>
                        <div className="text-xs text-muted-foreground">Your data is safe with 256-bit encryption</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">PCI Compliant</div>
                        <div className="text-xs text-muted-foreground">Industry standard security protocols</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Money-back Guarantee</div>
                        <div className="text-xs text-muted-foreground">30-day refund policy available</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Payment Summary - Sticky */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-6"
            >
              <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">₹{config.totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18%)</span>
                      <span className="font-medium">₹{(config.totalPrice * 0.18).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold">Total Amount</span>
                      <span className="text-3xl font-bold text-primary">
                        ₹{(config.totalPrice * 1.18).toFixed(2)}
                      </span>
                    </div>

                    <Button
                      onClick={handlePayment}
                      disabled={loading}
                      className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 relative overflow-hidden group"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Complete Payment
                          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => navigate({ to: '/billing/address' })}
                      disabled={loading}
                      className="w-full h-12 mt-3"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Billing
                    </Button>
                  </div>

                  <div className="text-xs text-center text-muted-foreground">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy
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
