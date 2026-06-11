import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { ArrowLeft, CreditCard, Check, Loader2, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'
import { createRazorOrderFn } from '#/serverActions/razorpay/order'
import { verifyRazorpayPayment } from '#/serverActions/razorpay/verify'
import { createOrderDirect } from '#/serverActions/billing/order.api'
import { ThemeSwitch } from '#/components/theme/ThemeSwitch'

export const Route = createFileRoute('/_protected/billing/payment')({
  component: BillingPaymentPage,
  head: () => ({ meta: [{ title: 'Payment | Flame Nodes' }] }),
})

declare global {
  interface Window {
    Razorpay: any
  }
}

function BillingPaymentPage() {
  const navigate = useNavigate()
  const [billingConfig, setBillingConfig] = useState<any>(null)
  const [billingAddress, setBillingAddress] = useState<any>(null)
  const [processing, setProcessing] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const config = sessionStorage.getItem('billingConfig')
    const address = sessionStorage.getItem('billingAddress')
    
    if (!config || !address) {
      toast.error('Missing billing information')
      navigate({ to: '/pricing' })
      return
    }
    
    setBillingConfig(JSON.parse(config))
    setBillingAddress(JSON.parse(address))

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleBack = () => {
    navigate({ to: '/billing/address' })
  }

  const handlePayment = async () => {
    if (!scriptLoaded) {
      toast.error('Payment system is loading. Please try again.')
      return
    }

    setProcessing(true)

    try {
      const order = await createOrderDirect({
        data: {
          productId: billingConfig.productId,
          quantity: billingConfig.quantity,
          billingPeriod: billingConfig.billingPeriod,
          configurationData: billingConfig.configuration,
          billingDetails: billingAddress,
        },
      })

      const amountInPaise = Math.round(billingConfig.totalPrice * 100)

      const razorpayOrder = await createRazorOrderFn({
        data: {
          amount: amountInPaise,
          currency: 'INR',
          receipt: order.id,
          notes: {
            orderId: order.id,
            productName: billingConfig.productName,
          },
        },
      })

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_default',
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: 'FlameNodes',
        description: `${billingConfig.productName} - ${billingConfig.billingPeriod}`,
        order_id: razorpayOrder.id,
        handler: async function (response: any) {
          try {
            await verifyRazorpayPayment({
              data: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: order.id,
              },
            })

            sessionStorage.removeItem('billingConfig')
            sessionStorage.removeItem('billingAddress')

            toast.success('Payment successful!')
            navigate({ to: '/billing/success', search: { orderId: order.id } })
          } catch (error: any) {
            toast.error(error.message || 'Payment verification failed')
            setProcessing(false)
          }
        },
        prefill: {
          name: `${billingAddress.firstName} ${billingAddress.lastName}`,
          email: billingAddress.email,
          contact: billingAddress.phone,
        },
        theme: {
          color: '#10b981',
        },
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: false,
          ondismiss: function () {
            setProcessing(false)
            toast.info('Payment cancelled')
          },
          animation: true,
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      toast.error(error.message || 'Failed to initiate payment')
      setProcessing(false)
    }
  }

  if (!billingConfig || !billingAddress) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/flamenodes.png" alt="Flame Nodes" className="h-8 w-8" />
            <span className="text-xl font-bold">Flame Nodes</span>
          </Link>
          <ThemeSwitch />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-2">
              Complete Your Order
            </h1>
            <p className="text-muted-foreground">
              Step 3 of 3: Review and pay
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Configuration</span>
              <span className="text-sm text-muted-foreground">Billing Details</span>
              <span className="text-sm font-medium text-primary">Payment</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-primary rounded-full" />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Product Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Product</span>
                        <span className="font-medium">{billingConfig.productName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Billing Period</span>
                        <span className="font-medium">{billingConfig.billingPeriod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quantity</span>
                        <span className="font-medium">×{billingConfig.quantity}</span>
                      </div>
                      {Object.keys(billingConfig.configuration || {}).length > 0 && (
                        <div className="pt-2 border-t">
                          <p className="font-medium mb-2">Configuration</p>
                          {Object.entries(billingConfig.configuration).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-xs">
                              <span className="text-muted-foreground">{key}</span>
                              <span>{value as string}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Billing Information</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground block">Name</span>
                        <span className="font-medium">{billingAddress.firstName} {billingAddress.lastName}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Email</span>
                        <span className="font-medium">{billingAddress.email}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Phone</span>
                        <span className="font-medium">{billingAddress.phone}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Address</span>
                        <span className="font-medium">
                          {billingAddress.address}, {billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}, {billingAddress.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold">Total Amount</span>
                    <span className="text-4xl font-bold text-primary">₹{billingConfig.totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <div className="text-xs">
                        <p className="font-medium">Secure Payment</p>
                        <p className="text-muted-foreground">256-bit SSL encryption</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Check className="w-5 h-5 text-primary" />
                      <div className="text-xs">
                        <p className="font-medium">Instant Activation</p>
                        <p className="text-muted-foreground">Setup within minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Check className="w-5 h-5 text-primary" />
                      <div className="text-xs">
                        <p className="font-medium">24/7 Support</p>
                        <p className="text-muted-foreground">Expert assistance</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={processing}
                      className="flex-1 h-12"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handlePayment}
                      disabled={processing || !scriptLoaded}
                      className="flex-1 h-12"
                    >
                      {processing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Choose Payment
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8 opacity-70" />
                  <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" className="h-8 opacity-70" />
                  <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-8 opacity-70" />
                  <img src="https://img.icons8.com/color/48/rupay.png" alt="RuPay" className="h-8 opacity-70" />
                  <div className="text-sm text-muted-foreground">
                    Powered by <span className="font-semibold">Razorpay</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t bg-card py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Flame Nodes. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
