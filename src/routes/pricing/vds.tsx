import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/vds')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/vds"!</div>
}
