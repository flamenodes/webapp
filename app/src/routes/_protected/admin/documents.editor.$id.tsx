import { Suspense, lazy } from 'react'
import { getPageDocument } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

// Lazy-load so @mdxeditor/editor (browser-only) never runs during SSR
const DocumentEditor = lazy(
  () => import('#/components/admin/documents/DocumentEditor'),
)

export const Route = createFileRoute('/_protected/admin/documents/editor/$id')({
  head: () => ({
    meta: [{ title: 'Document Editor | Flame Nodes Admin' }],
  }),
  component: RouteComponent,
})

function EditorLoader({ id }: { id: string }) {
  const navigate = useNavigate()

  const { data: res } = useSuspenseQuery({
    queryKey: ['page-document', id],
    queryFn: () => getPageDocument({ data: { id } }),
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

function RouteComponent() {
  const { id } = Route.useParams()
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Loading editor…
        </div>
      }
    >
      <EditorLoader id={id} />
    </Suspense>
  )
}
