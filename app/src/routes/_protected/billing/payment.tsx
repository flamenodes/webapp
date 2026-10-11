import { createFileRoute, useNavigate, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { ArrowLeft, CreditCard, Check, Loader2, ShieldCheck, TicketPercent } from 'lucide-react'
import { toast } from 'sonner'
import { createOrderDirect, getOrder } from '#/serverActions/billing/order.api'
import { createCashfreeSession, verifyCashfreePayment } from '#/serverActions/cashfree/payment.api'
import { verifyRazorpayPayment } from '#/serverActions/razorpay/verify'
import { validateCoupon } from '#/serverActions/billing/coupon.api'
import { ThemeSwitch } from '#/components/theme/ThemeSwitch'

export const Route = createFileRoute('/_protected/billing/payment')({
  component: BillingPaymentPage,
  validateSearch: (search) => ({
    orderId: (search as any)?.orderId as string | undefined,
    cashfreeReturn: (search as any)?.cashfreeReturn as string | undefined,
  }),
  head: () => ({ meta: [{ title: 'Payment | Flame Nodes' }] }),
})

declare global { interface Window { Cashfree: any; Razorpay: any } }

/** A coupon the server has priced for this order. */
type AppliedCoupon = {
  code: string
  label: string
  discountAmount: number
  totalAmount: number
}

function BillingPaymentPage() {
  const navigate = useNavigate()
  const { orderId, cashfreeReturn } = Route.useSearch()
  const [billingConfig, setBillingConfig] = useState<any>(null)
  const [billingAddress, setBillingAddress] = useState<any>(null)
  const [existingOrder, setExistingOrder] = useState<any>(null)
  const [orderLoading, setOrderLoading] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [couponInput, setCouponInput] = useState('')
  const [coupon, setCoupon] = useState<AppliedCoupon | null>(null)
  const [checkingCoupon, setCheckingCoupon] = useState(false)

  useEffect(() => {
    if (orderId) {
      let cancelled = false
      setOrderLoading(true)
      getOrder({ data: { orderId } })
        .then((data) => { if (!cancelled) setExistingOrder(data) })
        .catch((error: any) => { if (!cancelled) toast.error(error?.message || 'Could not load this order') })
        .finally(() => { if (!cancelled) setOrderLoading(false) })
      return () => { cancelled = true }
    }

    const config = sessionStorage.getItem('billingConfig')
    const address = sessionStorage.getItem('billingAddress')
    
    if (!config || !address) {
      toast.error('Missing billing information')
      navigate({ to: '/pricing' })
      return
    }
    
    setBillingConfig(JSON.parse(config))
    setBillingAddress(JSON.parse(address))

  }, [orderId])

  useEffect(() => {
    if (!orderId || !cashfreeReturn) return
    verifyCashfreePayment({ data: { orderId } })
      .then(() => {
        sessionStorage.removeItem('billingConfig')
        sessionStorage.removeItem('billingAddress')
        navigate({ to: '/billing/success', search: { orderId } })
      })
      .catch((error: any) => toast.error(error?.message || 'Payment has not been confirmed yet'))
  }, [orderId, cashfreeReturn])

  const handleBack = () => {
    navigate({ to: '/billing/address' })
  }

  /** What the customer is shown before a coupon; the server recomputes it at charge time. */
  const subtotal = Math.round(Number(billingConfig?.totalPrice ?? 0))
  const payable = coupon ? coupon.totalAmount : subtotal

  const handleApplyCoupon = async () => {
    const code = couponInput.trim().toUpperCase()
    if (!code) {
      toast.error('Enter a coupon code first.')
      return
    }

    setCheckingCoupon(true)
    try {
      const result = await validateCoupon({ data: { code, subtotal } })

      if (!result.ok) {
        setCoupon(null)
        toast.error(result.message)
        return
      }

      setCoupon({
        code: result.code,
        label: result.label,
        discountAmount: result.discountAmount,
        totalAmount: result.totalAmount,
      })
      toast.success(`${result.label} applied`)
    } catch (error: any) {
      setCoupon(null)
      toast.error(error?.message || 'Could not check that coupon.')
    } finally {
      setCheckingCoupon(false)
    }
  }

  const handleRemoveCoupon = () => {
    setCoupon(null)
    setCouponInput('')
  }

  const openOrderPayment = async (paymentOrderId: string) => {
    const session = await createCashfreeSession({ data: { orderId: paymentOrderId } })
    if (session.gateway === 'cashfree-paid') {
      await verifyCashfreePayment({ data: { orderId: paymentOrderId } })
      sessionStorage.removeItem('billingConfig')
      sessionStorage.removeItem('billingAddress')
      navigate({ to: '/billing/success', search: { orderId: paymentOrderId } })
      return
    }
    if (session.gateway === 'razorpay') {
      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://checkout.razorpay.com/v1/checkout.js'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Could not load payment checkout'))
          document.body.appendChild(script)
        })
      }
      new window.Razorpay({
        key: session.keyId,
        amount: session.amount,
        currency: session.currency,
        name: 'Flame Nodes',
        order_id: session.razorpayOrderId,
        handler: async (response: any) => {
          try {
            await verifyRazorpayPayment({ data: { orderId: paymentOrderId, ...response } })
            sessionStorage.removeItem('billingConfig')
            sessionStorage.removeItem('billingAddress')
            navigate({ to: '/billing/success', search: { orderId: paymentOrderId } })
          } catch (error: any) {
            toast.error(error?.message || 'Payment verification failed')
            setProcessing(false)
          }
        },
        modal: { ondismiss: () => setProcessing(false) },
      }).open()
      return
    }

    if (!window.Cashfree) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js'
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Could not load Cashfree checkout'))
        document.body.appendChild(script)
      })
    }
    const cashfree = window.Cashfree({ mode: session.mode === 'production' ? 'production' : 'sandbox' })
    cashfree.checkout({ paymentSessionId: session.paymentSessionId, redirectTarget: '_modal' })
      .then(async (result: any) => {
        if (result?.error) {
          toast.error(result.error.message || 'Payment was cancelled or could not be completed')
          setProcessing(false)
        } else if (result?.paymentDetails) {
          try {
            await verifyCashfreePayment({ data: { orderId: paymentOrderId } })
            sessionStorage.removeItem('billingConfig')
            sessionStorage.removeItem('billingAddress')
            navigate({ to: '/billing/success', search: { orderId: paymentOrderId } })
          } catch (error: any) {
            toast.error(error?.message || 'Payment is awaiting confirmation')
            setProcessing(false)
          }
        }
      })
      .catch((error: any) => {
        toast.error(error?.message || 'Could not open Cashfree checkout')
        setProcessing(false)
      })
  }

  const handlePayment = async () => {
    if (processing) return
    setProcessing(true)

    try {
      let paymentOrderId = orderId
      if (!paymentOrderId) {
        const order = await createOrderDirect({
          data: {
            productId: billingConfig.productId,
            quantity: billingConfig.quantity,
            billingPeriod: billingConfig.billingPeriod,
            configurationData: billingConfig.configuration,
            couponCode: coupon?.code,
            billingDetails: billingAddress,
          },
        })
        paymentOrderId = order.id
      }
      await openOrderPayment(paymentOrderId)
    } catch (error: any) {
      toast.error(error.message || 'Failed to initiate payment')
      setProcessing(false)
    }
  }

  if (orderId) {
    if (orderLoading) {
      return <main className="grid min-h-screen place-items-center bg-background text-foreground"><Loader2 className="h-8 w-8 animate-spin text-primary" aria-label="Loading payment" /></main>
    }
    if (!existingOrder) {
      return <main className="grid min-h-screen place-items-center bg-background p-5 text-foreground"><section className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center"><h1 className="text-xl font-semibold">Order unavailable</h1><p className="mt-2 text-sm text-muted-foreground">We couldn’t load this order. Return to your orders and try again.</p><Button className="mt-6 w-full" onClick={() => navigate({ to: '/user/orders' })}>Back to orders</Button></section></main>
    }
    if (existingOrder.status !== 'PENDING') {
      return (
        <main className="grid min-h-screen place-items-center bg-background p-5 text-foreground">
          <section className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center text-card-foreground shadow-sm">
            <Check className="mx-auto mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-xl font-semibold">This order is already paid</h1>
            <p className="mt-2 text-sm text-muted-foreground">Order #{existingOrder.id.slice(-10).toUpperCase()}</p>
            <Button className="mt-6 w-full" onClick={() => navigate({ to: '/user/servers' })}>View my services</Button>
          </section>
        </main>
      )
    }
    const orderBilling = existingOrder.deliveryData ?? {}
    const billingDetails = orderBilling.billingDetails ?? orderBilling
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border bg-card">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link to="/" className="flex items-center gap-2.5"><img src="/flamenodes.png" alt="" className="h-8 w-8" /><span className="text-lg font-semibold">Flame Nodes</span></Link>
            <div className="flex items-center gap-3"><span className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />Secure payment</span><ThemeSwitch /></div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Payment</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Complete your order</h1>
            <p className="mt-2 text-sm text-muted-foreground">Review your order and pay securely without leaving this page.</p>
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section className="rounded-xl border border-border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
                <div><h2 className="font-semibold">Order summary</h2><p className="mt-1 text-xs text-muted-foreground">Order #{existingOrder.id.slice(-10).toUpperCase()}</p></div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">Payment due</span>
              </div>
              <div className="divide-y divide-border px-5 sm:px-6">
                {existingOrder.renewalForServer && <div className="border-b border-border bg-muted/40 py-3 text-sm"><span className="font-medium">Server renewal</span><span className="text-muted-foreground"> · {existingOrder.renewalForServer.name}</span></div>}
                {existingOrder.items.map((item: any) => (
                  <div key={item.id} className="flex items-start justify-between gap-4 py-5">
                    <div className="min-w-0"><p className="font-medium">{item.productName}</p><p className="mt-1 text-sm text-muted-foreground">{item.billingPeriod} · Qty {item.quantity}</p>
                      {item.specsSnapshot && Object.keys(item.specsSnapshot).length > 0 && <dl className="mt-3 grid gap-x-5 gap-y-1.5 text-xs sm:grid-cols-2">{Object.entries(item.specsSnapshot).map(([key, value]) => <div key={key} className="flex justify-between gap-3"><dt className="text-muted-foreground">{key}</dt><dd className="text-right">{String(value)}</dd></div>)}</dl>}
                    </div>
                    <p className="shrink-0 font-semibold">₹{item.totalPrice.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border bg-muted/50 px-5 py-5 sm:px-6">
                <h3 className="text-sm font-semibold">Billing details</h3>
                <div className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                  <div><p className="text-muted-foreground">Name</p><p className="mt-0.5 font-medium">{[billingDetails.firstName, billingDetails.lastName].filter(Boolean).join(' ') || billingDetails.billingName || existingOrder.user.name}</p></div>
                  <div><p className="text-muted-foreground">Email</p><p className="mt-0.5 break-all font-medium">{billingDetails.email || billingDetails.billingEmail || existingOrder.user.email}</p></div>
                  {billingDetails.phone && <div><p className="text-muted-foreground">Phone</p><p className="mt-0.5 font-medium">{billingDetails.phone}</p></div>}
                  {billingDetails.address && <div><p className="text-muted-foreground">Address</p><p className="mt-0.5 font-medium">{[billingDetails.address, billingDetails.city, billingDetails.state, billingDetails.zipCode, billingDetails.country].filter(Boolean).join(', ')}</p></div>}
                </div>
              </div>
            </section>
            <aside className="lg:sticky lg:top-6">
              <section className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6">
                <h2 className="text-lg font-semibold">Payment</h2>
                <div className="mt-5 flex items-center justify-between border-b border-border pb-4 text-sm"><span className="text-muted-foreground">Order total</span><span className="font-semibold">₹{existingOrder.totalAmount.toFixed(2)}</span></div>
                <div className="flex items-center justify-between py-4"><span className="font-semibold">Pay now</span><span className="text-2xl font-bold">₹{existingOrder.totalAmount.toFixed(2)}</span></div>
                <Button onClick={handlePayment} disabled={processing} className="h-12 w-full text-base font-semibold">
                  {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Opening payment</> : <><CreditCard className="mr-2 h-4 w-4" />Pay ₹{existingOrder.totalAmount.toFixed(2)} now</>}
                </Button>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 p-3 text-xs leading-5 text-emerald-800 dark:text-emerald-300"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /><p>Payment opens in a secure modal. Your payment details are processed by the gateway.</p></div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    )
  }

  if (!billingConfig || !billingAddress) {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/flamenodes.png" alt="" className="h-8 w-8" />
            <span className="text-lg font-semibold">Flame Nodes</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />Secure checkout</span>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-10">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Checkout <span className="px-1">/</span> Payment</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Review and pay</h1>
          <p className="mt-1 text-sm text-muted-foreground">Check your service and billing details before completing your order.</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h2 className="font-semibold">Your order</h2>
            </div>
            <div className="divide-y divide-border px-5 sm:px-6">
              <div className="py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{billingConfig.productName}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{billingConfig.billingPeriod} · Quantity {billingConfig.quantity}</p>
                  </div>
                  <span className="shrink-0 font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                {Object.keys(billingConfig.configuration || {}).length > 0 && (
                  <dl className="mt-4 grid gap-x-6 gap-y-2 border-t border-border pt-4 text-sm sm:grid-cols-2">
                    {Object.entries(billingConfig.configuration).map(([key, value]) => (
                      <div key={key} className="flex justify-between gap-3"><dt className="text-muted-foreground">{key}</dt><dd className="text-right font-medium">{String(value)}</dd></div>
                    ))}
                  </dl>
                )}
              </div>

              <div className="py-5">
                <h3 className="text-sm font-semibold">Billing information</h3>
                <div className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                  <div><p className="text-muted-foreground">Name</p><p className="mt-0.5 font-medium">{billingAddress.firstName} {billingAddress.lastName}</p></div>
                  <div><p className="text-muted-foreground">Email</p><p className="mt-0.5 break-all font-medium">{billingAddress.email}</p></div>
                  <div><p className="text-muted-foreground">Phone</p><p className="mt-0.5 font-medium">{billingAddress.phone}</p></div>
                  <div><p className="text-muted-foreground">Address</p><p className="mt-0.5 font-medium">{billingAddress.address}, {billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}, {billingAddress.country}</p></div>
                </div>
              </div>
            </div>
            <div className="border-t border-border bg-muted/40 px-5 py-4 sm:px-6">
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" /><p>Service setup begins after your payment is confirmed. Our support team is available around the clock.</p></div>
            </div>
          </section>

          <aside className="lg:sticky lg:top-6">
            <section className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6">
              <h2 className="font-semibold">Payment summary</h2>
              <div className="mt-4 rounded-lg border border-border p-3.5">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium"><TicketPercent className="h-4 w-4 text-primary" />Promo code</div>
                {coupon ? (
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <div><span className="font-mono font-semibold">{coupon.code}</span><span className="ml-1 text-muted-foreground">· {coupon.label}</span></div>
                    <Button variant="ghost" size="sm" onClick={handleRemoveCoupon} disabled={processing}>Remove</Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input value={couponInput} onChange={(e) => setCouponInput(e.target.value.toUpperCase())} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleApplyCoupon() } }} placeholder="Enter code" className="font-mono uppercase" disabled={processing} />
                    <Button variant="outline" onClick={handleApplyCoupon} disabled={processing || checkingCoupon}>{checkingCoupon ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Apply'}</Button>
                  </div>
                )}
              </div>

              <div className="mt-5 space-y-3 border-b border-border pb-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
                {coupon && <div className="flex justify-between text-emerald-700 dark:text-emerald-400"><span>Discount</span><span>−₹{coupon.discountAmount.toFixed(2)}</span></div>}
                <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>Included</span></div>
              </div>
              <div className="flex items-end justify-between py-4"><span className="font-semibold">Total due</span><span className="text-2xl font-bold">₹{payable.toFixed(2)}</span></div>
              <Button onClick={handlePayment} disabled={processing} className="h-12 w-full text-base font-semibold">
                {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Opening payment</> : <><CreditCard className="mr-2 h-4 w-4" />Pay ₹{payable.toFixed(2)} now</>}
              </Button>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 p-3 text-xs leading-5 text-emerald-800 dark:text-emerald-300"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /><p>Secure payment opens in a modal on this page. Your card and UPI details are handled by the payment provider.</p></div>
              <Button variant="ghost" onClick={handleBack} disabled={processing} className="mt-2 w-full"><ArrowLeft className="mr-2 h-4 w-4" />Back to billing details</Button>
            </section>
            <p className="mt-3 px-2 text-center text-xs leading-5 text-muted-foreground">By paying, you agree to our Terms of Service and Privacy Policy.</p>
          </aside>
        </div>
      </main>
    </div>
  )
}
