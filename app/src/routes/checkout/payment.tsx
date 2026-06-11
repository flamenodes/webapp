import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { CreditCard, Package, Loader2, CheckCircle2 } from 'lucide-react'
import { updateOrderStatus,getOrder } from '#/serverActions/billing/order.api'
import { toast } from 'sonner'

declare global {
  interface Window {
    Razorpay: any
  }
}

export const Route = createFileRoute('/checkout/payment')({
  component: CheckoutPaymentPage,
  validateSearch: (search) => ({
    orderId: (search as any)?.orderId as string,
    razorpayOrderId: (search as any)?.razorpayOrderId as string,
  }),
})

function CheckoutPaymentPage() {
  const navigate = useNavigate()
  const { orderId, razorpayOrderId } = Route.useSearch()
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (!orderId || !razorpayOrderId) {
      toast.error('Invalid payment link')
      return
    }

    async function fetchOrder() {
      try {
        const orderData = await getOrder({ data: { orderId } })
        setOrder(orderData)
      } catch (error: any) {
        toast.error(error.message || 'Failed to load order')
      } finally {
        setLoading(false)
      }
    }

    fetchOrder()
  }, [orderId, razorpayOrderId])

  const handlePayment = async () => {
    if (!order) return

    setProcessing(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_Srw5bVw6ZFumAD',
        amount: order.totalAmount * 100,
        currency: 'INR',
        name: 'Flame Nodes',
        description: order.items.map((i: any) => i.productName).join(', '),
        order_id: razorpayOrderId,
        prefill: {
          name: order.user.name,
          email: order.user.email,
        },
        theme: {
          color: '#FF4500',
        },
        handler: async function (response: any) {
          toast.success('Payment successful!')
          navigate({ to: "/user/dashboard" })
          
          // Update order status in background
          updateOrderStatus({
            data: {
              orderId: order.id,
              status: 'PAID',
            }
          }).catch((error) => {
            console.error('Background order update failed:', error)
          })
        },
        modal: {
          ondismiss: function () {
            setProcessing(false)
            toast.error('Payment cancelled')
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    }

    script.onerror = () => {
      setProcessing(false)
      toast.error('Failed to load payment gateway')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-primary/10">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-primary/10">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">Order not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (order.status !== 'PENDING') {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-primary/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4"
        >
          <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
            <CardContent className="pt-6 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Payment Already Completed</h2>
              <p className="text-muted-foreground">This order has already been paid.</p>
              <Button onClick={() => navigate({ to: '/user/dashboard' })} className="w-full">
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 flex items-center min-h-screen">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
              Complete Your Payment
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure payment powered by Razorpay
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Items */}
                <div className="space-y-3">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-center p-4 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium">{item.productName}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity} · {item.billingPeriod}
                        </p>
                      </div>
                      <p className="font-semibold">₹{item.totalPrice.toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Total Amount</span>
                    <span className="text-3xl font-bold text-primary">
                      ₹{order.totalAmount.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    onClick={handlePayment}
                    disabled={processing}
                    className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 relative overflow-hidden group"
                  >
                    {processing ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Pay Now
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Security Notice */}
                <div className="text-center text-xs text-muted-foreground">
                  <p>🔒 Secure payment powered by Razorpay</p>
                  <p className="mt-1">Your payment information is encrypted and secure</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
