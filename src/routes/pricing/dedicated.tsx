import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/dedicated')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/dedicated"!</div>
}
