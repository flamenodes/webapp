import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billing/cart')({
  head: () => ({
    meta: [{ title: 'Your Cart | Flame Nodes' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/billing/cart"!</div>
}
