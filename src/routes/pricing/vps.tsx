import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/vps')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/vps"!</div>
}
