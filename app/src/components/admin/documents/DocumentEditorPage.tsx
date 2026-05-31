import { Suspense, lazy } from 'react'
import { getPageDocumentBySlug } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

const DocumentEditor = lazy(
  () => import('#/components/admin/documents/DocumentEditor'),
)

function EditorContent({ slug }: { slug: string }) {
  const navigate = useNavigate()

  const { data: res } = useSuspenseQuery({
    queryKey: ['page-document-slug', slug],
    queryFn: () => getPageDocumentBySlug({ data: { slug } }),
  })

  if (!res?.resData) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Document not found.
      </div>
    )
  }

  return (
    <DocumentEditor
      document={res.resData}
      showSlugInitially
      onClose={() => navigate({ to: '/admin/documents' })}
    />
  )
}

export default function DocumentEditorPage({ slug }: { slug: string }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Loading editor…
        </div>
      }
    >
      <EditorContent slug={slug} />
    </Suspense>
  )
}
