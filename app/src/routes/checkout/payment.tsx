import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/payment')({
  validateSearch: (search) => ({
    orderId: (search as any)?.orderId as string | undefined,
    cashfreeReturn: (search as any)?.cashfreeReturn as string | undefined,
  }),
  beforeLoad: ({ search }) => {
    if (!search.orderId) throw redirect({ to: '/user/orders' })
    throw redirect({
      to: '/billing/payment',
      search: { orderId: search.orderId, cashfreeReturn: search.cashfreeReturn },
    })
  },
  component: () => null,
})
