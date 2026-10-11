import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Button } from '#/components/ui/button'
import { CheckCircle2, Download, Loader2, Package, Receipt, ShieldCheck } from 'lucide-react'
import { getOrder } from '#/serverActions/billing/order.api'
import { generateInvoice, getInvoiceByOrderId } from '#/serverActions/invoice/invoice.api'
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
  const [invoiceLoading, setInvoiceLoading] = useState(false)

  useEffect(() => {
    if (!orderId) {
      toast.error('No order ID provided')
      navigate({ to: '/pricing' })
      return
    }

    let cancelled = false
    getOrder({ data: { orderId } })
      .then((data) => { if (!cancelled) setOrder(data) })
      .catch((error: any) => { if (!cancelled) toast.error(error.message || 'Failed to load order') })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [orderId])

  const downloadInvoice = async () => {
    if (!orderId || invoiceLoading) return
    setInvoiceLoading(true)
    try {
      let invoice: any
      try {
        invoice = await getInvoiceByOrderId({ data: { orderId } })
      } catch {
        const generated = await generateInvoice({ data: { orderId } })
        if (!generated.success || !generated.data) throw new Error(generated.message || 'Invoice is not available yet')
        invoice = generated.data
      }

      const anchor = document.createElement('a')
      anchor.href = invoice.pdfUrl
      anchor.target = '_blank'
      anchor.rel = 'noopener noreferrer'
      anchor.click()
    } catch (error: any) {
      toast.error(error?.message || 'Could not prepare your invoice')
    } finally {
      setInvoiceLoading(false)
    }
  }

  if (loading) {
    return <main className="grid min-h-screen place-items-center bg-muted/30 text-foreground"><div className="text-center"><Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" /><p className="mt-3 text-sm text-muted-foreground">Loading your order…</p></div></main>
  }

  if (!order) {
    return <main className="grid min-h-screen place-items-center bg-muted/30 p-5 text-foreground"><section className="w-full max-w-md rounded-xl border border-border bg-card p-7 text-center"><h1 className="text-xl font-semibold">Order not found</h1><p className="mt-2 text-sm text-muted-foreground">We couldn’t load this order.</p><Button className="mt-5 w-full" onClick={() => navigate({ to: '/user/orders' })}>View my orders</Button></section></main>
  }

  const hasServer = Boolean(order.renewalForServer?.id || order.items?.some((item: any) => item.server?.id))

  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5"><img src="/flamenodes.png" alt="" className="h-8 w-8" /><span className="text-lg font-semibold">Flame Nodes</span></Link>
          <div className="flex items-center gap-3"><span className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex"><ShieldCheck className="h-4 w-4 text-primary" />Payment complete</span><ThemeSwitch /></div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="mb-6 rounded-xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10"><CheckCircle2 className="h-8 w-8 text-primary" /></div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Payment successful</h1>
          <p className="mt-2 text-sm text-muted-foreground">Your order is confirmed. We’ll email you when it’s ready.</p>
          <p className="mt-3 text-xs text-muted-foreground">Order #{order.id.slice(-10).toUpperCase()}</p>
        </section>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="border-b border-border px-5 py-4 sm:px-6"><h2 className="font-semibold">Order summary</h2><p className="mt-1 text-xs text-muted-foreground">Placed {new Date(order.createdAt).toLocaleDateString()}</p></div>
            <div className="divide-y divide-border px-5 sm:px-6">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex items-start justify-between gap-4 py-5">
                  <div><p className="font-medium">{item.productName}</p><p className="mt-1 text-sm text-muted-foreground">{item.billingPeriod} · Quantity {item.quantity}</p></div>
                  <p className="shrink-0 font-medium">₹{item.totalPrice.toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-muted/40 px-5 py-4 sm:px-6">
              <div className="flex justify-between text-sm text-muted-foreground"><span>Order status</span><span className="font-medium text-foreground">{order.status}</span></div>
              <div className="mt-3 flex justify-between border-t border-border pt-3 font-semibold"><span>Total paid</span><span className="text-primary">₹{order.totalAmount.toFixed(2)}</span></div>
            </div>
          </section>

          <aside className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6">
            <h2 className="font-semibold">What’s next?</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{hasServer ? 'Your service is available in your server dashboard. Provisioning may take a few minutes.' : 'We’re processing your order. You can follow its status from your orders page.'}</p>
            <div className="mt-5 space-y-2.5">
              <Button className="h-11 w-full" onClick={() => void downloadInvoice()} disabled={invoiceLoading || (order.status !== 'PAID' && order.status !== 'DELIVERED')}>
                {invoiceLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                {invoiceLoading ? 'Preparing invoice…' : 'Download invoice'}
              </Button>
              <Button variant="outline" className="h-11 w-full" onClick={() => navigate({ to: hasServer ? '/user/servers' : '/user/orders' })}>
                {hasServer ? <Package className="mr-2 h-4 w-4" /> : <Receipt className="mr-2 h-4 w-4" />}
                {hasServer ? 'View your server' : 'View your order'}
              </Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
