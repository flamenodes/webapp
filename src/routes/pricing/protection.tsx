import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/protection')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/protection"!</div>
}
