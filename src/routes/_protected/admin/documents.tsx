import DocumentsPage from '#/components/admin/documents/DocumentsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/documents')({
  validateSearch: (search: Record<string, unknown>) => ({
    view: typeof search.view === 'string' ? search.view : 'table',
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <DocumentsPage />
}
