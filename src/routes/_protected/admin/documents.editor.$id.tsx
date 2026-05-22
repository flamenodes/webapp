import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/documents/editor/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/documents/editor/$id"!</div>
}
