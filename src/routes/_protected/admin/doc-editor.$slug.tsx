import DocumentEditorPage from '#/components/admin/documents/DocumentEditorPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/doc-editor/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
	const { slug } = Route.useParams()
  return <DocumentEditorPage slug={slug} />
}
