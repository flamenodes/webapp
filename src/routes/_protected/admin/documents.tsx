import CreateDocumentSheet from '#/components/admin/documents/CreateDocumentSheet'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/documents')({
  validateSearch: (search: Record<string, unknown>) => ({
    view: typeof search.view === 'string' ? search.view : 'table',
  }),
  component: DocumentPage,
})

function DocumentPage() {

  return (
    <main className="mx-auto w-full max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Page Documents</h1>

          <p className="text-muted-foreground">
            Manage and organize all page documents.
          </p>
        </div>
        
				<CreateDocumentSheet/>

      </div>
    </main>
  )
}
