import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Button } from '#/components/ui/button'
import { CheckCircle2, ArrowRight, Package, Receipt } from 'lucide-react'
import { getOrder } from '#/serverActions/billing/order.api'
import { toast } from 'sonner'
import { ThemeSwitch } from '#/components/theme/ThemeSwitch'

export const Route = createFileRoute('/_protected/billing/success')({
  component: BillingSuccessPage,
  validateSearch: (search) => ({
    orderId: (search as any)?.orderId as string | undefined,
  }),
})

function BillingSuccessPage() {
  const navigate = useNavigate()
  const { orderId } = Route.useSearch()
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!orderId) {
      toast.error('No order ID provided')
      navigate({ to: '/pricing' })
      return
    }

    async function fetchOrder() {
      try {
        const data = await getOrder({ data: { orderId } })
        setOrder(data)
      } catch (error: any) {
        toast.error(error.message || 'Failed to load order')
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Order not found</h2>
          <Button onClick={() => navigate({ to: '/billing/cart' })}>
            Create New Order
          </Button>
        </div>
      </div>
    )
  }

  const billingDetails = (order.deliveryData as any)?.billingDetails

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
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4"
            >
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-2">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground">
              Your order has been confirmed and is being processed
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Order ID</p>
                    <p className="font-mono font-medium">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Order Date</p>
                    <p className="font-medium">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {order.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">₹{(order.totalAmount / 100).toFixed(2)}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Order Items</h3>
                  <div className="space-y-2">
                    {order.items.map((item: any) => (
                      <div key={item.id} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">{item.productName}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.billingPeriod} • Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold">₹{(item.totalPrice / 100).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {billingDetails && (
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Billing Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Name</p>
                        <p className="font-medium">{billingDetails.firstName} {billingDetails.lastName}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Email</p>
                        <p className="font-medium">{billingDetails.email}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{billingDetails.phone}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Address</p>
                        <p className="font-medium">
                          {billingDetails.city}, {billingDetails.state}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">What's Next?</h3>
                      <p className="text-sm text-muted-foreground">
                        Your server will be provisioned within a few minutes. You'll receive an email with access credentials once it's ready.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
            <Button
              className="flex-1 h-12"
              onClick={() => navigate({ to: '/user/orders' })}
            >
              <Receipt className="w-5 h-5 mr-2" />
              View My Orders
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-12"
              onClick={() => navigate({ to: '/pricing' })}
            >
              <Package className="w-5 h-5 mr-2" />
              Browse More Products
            </Button>
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
