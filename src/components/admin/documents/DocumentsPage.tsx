'use client'

import DocumentsDataTable from '#/components/admin/documents/DocumentsDataTable'
import CreateDocumentSheet from '#/components/admin/documents/CreateDocumentSheet'
import { GetPageDocuments } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function DocumentsPage() {
  const { data: res } = useSuspenseQuery({
    queryKey: ['page-documents'],
    queryFn: GetPageDocuments,
  })

  const documents = res.data ?? []

  return (
    <main className="mx-auto w-full max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            Create and publish documentation pages.
          </p>
        </div>

        <CreateDocumentSheet />
      </div>

      <div className="mt-6">
        <DocumentsDataTable data={documents} />
      </div>
    </main>
  )
}

