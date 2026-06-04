import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billing/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/billing/checkout"!</div>
}
