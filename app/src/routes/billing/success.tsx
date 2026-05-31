import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { getOrder } from '#/serverActions/billing/order.api'
import { useServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/billing/success')({
  head: () => ({
    meta: [{ title: 'Order Confirmed | Flame Nodes' }],
  }),
  component: SuccessPage,
})

function SuccessPage() {
  const [orderId, setOrderId] = useState<string | undefined>(undefined)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setOrderId(params.get('orderId') || undefined)
  }, [])
  const getOrderFn = useServerFn(getOrder)
  const [order, setOrder] = useState<any | null>(null)
  useEffect(() => {
    if (!orderId) return
    ;(async () => {
      const res = await (getOrderFn as any)({ orderId })
      if (res && (res as any).success) {
        setOrder((res as any).data)
      }
    })()
  }, [orderId])

  if (!orderId) return <div className="p-8">No order specified.</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Payment Result</h1>
      {!order ? (
        <p className="mt-4">Loading order status...</p>
      ) : (
        <div className="mt-4 space-y-4">
          <div>
            <strong>Order ID:</strong> {order.id}
          </div>
          <div>
            <strong>Status:</strong> {order.status}
          </div>
          <div>
            <strong>Delivery:</strong> {order.deliveryMessage ?? 'Pending' }
          </div>
          <div>
            <strong>Finalized:</strong> {order.deliveryData?.finalizedAt ?? '—'}
          </div>

          <div className="pt-4">
            <a href="/dashboard" className="inline-flex items-center rounded bg-slate-800 px-4 py-2 text-white">Go to dashboard</a>
          </div>
        </div>
      )}
    </div>
  )
}
