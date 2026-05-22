import DocumentEditor from '#/components/admin/documents/DocumentEditor'
import { GetPageDocument } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/documents/$id')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    new: Boolean(search.new),
  }),
})

function RouteComponent() {
  const navigate = useNavigate()
  const { id } = Route.useParams()
  const search = Route.useSearch()

  const { data: res } = useSuspenseQuery({
    queryKey: ['page-document', id],
    queryFn: () =>
      GetPageDocument({
        data: { id },
      }),
  })

  if (!res.data) {
    return null
  }

  return (
    <DocumentEditor
      document={res.data}
      showSlugInitially={!search.new}
      onClose={() => navigate({ to: '/admin/documents', search: { view: 'table' } as any })}
    />
  )
}
