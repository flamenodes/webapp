import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { getOrders, cancelOrder } from '@/serverActions/billing/order.api'
import { getInvoiceByOrderId } from '@/serverActions/invoice/invoice.api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { ShoppingCart, Package, ChevronRight, Loader2, X, Download, RefreshCw } from 'lucide-react'
import { formatDistanceToNow } from '@/lib/date-utils'
import { useState } from 'react'
import { toast } from 'sonner'
import { RenewServerDialog } from '@/components/billing/RenewServerDialog'
import { getServerPanelUrl } from '@/lib/server-address'

export const Route = createFileRoute('/_protected/user/orders')({
  head: () => ({ meta: [{ title: 'My Orders | Flame Nodes' }] }),
  component: OrdersPage,
})

const statusConfig = {
  PENDING: {
    label: 'Pending',
    class: 'bg-yellow-500/15 text-yellow-500 border-yellow-500/20',
  },
  PAID: {
    label: 'Paid',
    class: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/20',
  },
  PROCESSING: {
    label: 'Processing',
    class: 'bg-blue-500/15 text-blue-500 border-blue-500/20',
  },
  DELIVERED: {
    label: 'Delivered',
    class: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/20',
  },
  CANCELLED: {
    label: 'Cancelled',
    class: 'bg-muted text-muted-foreground border-border',
  },
  REFUNDED: {
    label: 'Refunded',
    class: 'bg-orange-500/15 text-orange-500 border-orange-500/20',
  },
  PAYMENT_FAILED: {
    label: 'Payment Failed',
    class: 'bg-red-500/15 text-red-500 border-red-500/20',
  },
}

function OrdersPage() {
  const navigate = useNavigate()
  const qc = useQueryClient()
  const { data: orders } = useSuspenseQuery({
    queryKey: ['user-orders'],
    queryFn: () => getOrders(),
  })

  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const [cancellingOrderId, setCancellingOrderId] = useState<string | null>(null)
  const [orderToCancel, setOrderToCancel] = useState<string | null>(null)
  const [renewServer, setRenewServer] = useState<any>(null)

  const cancelMutation = useMutation({
    mutationFn: (orderId: string) => cancelOrder({ data: { orderId } }),
    onSuccess: (result) => {
      if (result.success) {
        toast.success('Order cancelled successfully')
        qc.invalidateQueries({ queryKey: ['user-orders'] })
      } else {
        toast.error(result.message || 'Failed to cancel order')
      }
      setCancellingOrderId(null)
    },
    onError: () => {
      toast.error('Failed to cancel order')
      setCancellingOrderId(null)
    },
  })

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
            <p className="text-sm text-muted-foreground mt-1">
              View your order history and track deliveries
            </p>
          </div>
          <Badge variant="outline" className="text-xs">
            {orders.length} Total Orders
          </Badge>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
                You haven't placed any orders yet. Browse our plans to get started.
              </p>
              <Button onClick={() => navigate({ to: '/pricing/minecraft' })}>Browse Plans</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {orders.map((order) => {
              const status = statusConfig[order.status]
              const isExpanded = expandedOrder === order.id

              return (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="pb-3 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Package className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-sm">
                            Order #{order.id.slice(0, 8).toUpperCase()}
                          </CardTitle>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {formatDistanceToNow(new Date(order.createdAt))}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs shrink-0 ${status.class}`}>
                        {status.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 py-3">
                    {/* Order Summary */}
                    <div className="flex items-center justify-between text-sm py-2 border-y">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Items</p>
                          <p className="font-medium text-sm">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Total</p>
                          <p className="font-semibold text-base">₹{order.totalAmount.toLocaleString()}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8"
                        onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                      >
                        <span className="text-xs mr-1">Details</span>
                        <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>

                    {/* Expanded Items */}
                    {isExpanded && (
                      <div className="space-y-2">
                        {order.items.map((item) => {
                          const srv = item.server ?? order.renewalForServer
                          const canRenew = srv && (srv.status === 'ACTIVE' || srv.status === 'SUSPENDED')
                          const panelUrl = srv ? getServerPanelUrl(srv) : null
                          const expiresAt = srv?.expiresAt ?? item.expiresAt
                          return (
                            <div key={item.id} className="space-y-3 rounded border bg-muted/30 p-2.5">
                              <div className="flex items-center justify-between gap-3 text-sm">
                                <div className="min-w-0">
                                  <p className="truncate font-medium">{item.productName}</p>
                                  <p className="mt-0.5 text-xs text-muted-foreground">{item.quantity} × ₹{item.unitPrice.toLocaleString()} • {item.billingPeriod.toLowerCase()}</p>
                                </div>
                                <p className="shrink-0 font-semibold">₹{item.totalPrice.toLocaleString()}</p>
                              </div>
                              {srv && (
                                <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-2.5">
                                  <p className="text-xs text-muted-foreground">
                                    {expiresAt ? <>Expires <span className="font-medium text-foreground">{new Date(expiresAt).toLocaleString()}</span></> : 'No expiry set'}
                                  </p>
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => navigate({ to: '/user/servers', search: { serverId: srv.id } })}>
                                      Track Server
                                    </Button>
                                    {panelUrl && (
                                      <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
                                        <a href={panelUrl} target="_blank" rel="noopener noreferrer">Panel</a>
                                      </Button>
                                    )}
                                    {canRenew && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 text-xs"
                                    onClick={() =>
                                      setRenewServer({
                                        id: srv.id,
                                        name: srv.name,
                                        resources: srv.resources,
                                        orderItem: { billingPeriod: item.billingPeriod, product: item.product },
                                      })
                                    }
                                  >
                                    <RefreshCw className="w-3 h-3 mr-1" />
                                    Renew
                                  </Button>
                                    )}
                                  </div>
                                </div>
                              )}
                              </div>
                          )
                        })}

                        {/* Order Totals */}
                        <div className="space-y-1 pt-2 border-t text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>₹{order.subtotalAmount.toLocaleString()}</span>
                          </div>
                          {order.discountAmount > 0 && (
                            <div className="flex justify-between text-success">
                              <span>Discount</span>
                              <span>-₹{order.discountAmount.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-semibold text-sm pt-1 border-t">
                            <span>Total</span>
                            <span>₹{order.totalAmount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    {order.status === 'PENDING' && (
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          className="h-8 px-3"
                          onClick={() => {
                            navigate({
                              to: '/billing/payment',
                              search: { orderId: order.id },
                            })
                          }}
                          disabled={cancellingOrderId === order.id}
                        >
                          Pay Now
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0"
                          onClick={() => setOrderToCancel(order.id)}
                          disabled={cancellingOrderId === order.id}
                        >
                          {cancellingOrderId === order.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <X className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    )}

                    {/* Download Invoice for Paid Orders */}
                    {(order.status === 'PAID' || order.status === 'PROCESSING' || order.status === 'DELIVERED') && (
                      <InvoiceDownloadButton orderId={order.id} />
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* Cancel Order Dialog */}
        <AlertDialog open={!!orderToCancel} onOpenChange={(open) => !open && setOrderToCancel(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Cancel Order</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to cancel this order? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No, keep it</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (orderToCancel) {
                    setCancellingOrderId(orderToCancel)
                    cancelMutation.mutate(orderToCancel)
                    setOrderToCancel(null)
                  }
                }}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Yes, cancel order
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Renew dialog for linked servers */}
        <RenewServerDialog
          server={renewServer}
          open={!!renewServer}
          onOpenChange={(open) => !open && setRenewServer(null)}
        />
      </div>
    </main>
  )
}

function InvoiceDownloadButton({ orderId }: { orderId: string }) {
  const { data: invoice, isLoading } = useQuery({
    queryKey: ['invoice', orderId],
    queryFn: () => getInvoiceByOrderId({ data: { orderId } }),
    retry: false,
    staleTime: 60000,
  })

  if (isLoading) {
    return (
      <Button size="sm" variant="outline" className="h-8" disabled>
        <Loader2 className="w-3 h-3 mr-1.5 animate-spin" />
        Loading...
      </Button>
    )
  }

  if (!invoice) {
    return (
      <Button
        size="sm"
        variant="outline"
        className="h-8"
        onClick={() => toast.info('Invoice not available yet')}
      >
        <Package className="w-3 h-3 mr-1.5" />
        Track Order
      </Button>
    )
  }

  return (
    <div className="flex gap-2 justify-end">
      <Button
        size="sm"
        variant="outline"
        className="h-8"
        onClick={() => window.open(invoice.pdfUrl, '_blank')}
      >
        <Download className="w-3 h-3 mr-1.5" />
        Invoice
      </Button>
    </div>
  )
}
