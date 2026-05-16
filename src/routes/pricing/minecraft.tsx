import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing/minecraft')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pricing/minecraft"!</div>
}
