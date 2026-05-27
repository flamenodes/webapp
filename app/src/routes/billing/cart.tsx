import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billing/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/billing/cart"!</div>
}
