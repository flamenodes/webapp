'use client'

import DocumentEditor from '#/components/admin/documents/DocumentEditor'
import { GetPageDocument } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

export default function DocumentEditorPage({
  id,
}: {
  id: string
}) {
  const navigate = useNavigate()

  const { data: res } = useSuspenseQuery({
    queryKey: ['page-document', id],
    queryFn: () =>
      GetPageDocument({
        data: { id },
      }),
  })

  if (!res.data) return null

  return (
    <DocumentEditor
      document={res.data}
      showSlugInitially
      onClose={() => navigate({ to: '/admin/documents', search: { view: 'table' } as any })}
    />
  )
}
