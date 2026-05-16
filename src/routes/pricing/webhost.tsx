import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/webhost')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/webhost"!</div>
}
