
import DocumentEditor from '#/components/admin/documents/DocumentEditor'
import { getPageDocumentBySlug } from '#/serverActions/admin/pagedocument.api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

export default function DocumentEditorPage({ slug }: { slug: string }) {
  const navigate = useNavigate()

  const { data: res } = useSuspenseQuery({
    queryKey: ['page-document', slug],
    queryFn: () => getPageDocumentBySlug({ data: { slug } }),
  })

		if (!res?.resData) {
      return null
		}

  return (
    <DocumentEditor
      document={res.resData}
      showSlugInitially
      onClose={() =>
        navigate({
          to: '/admin/documents',
          search: { view: 'table' } as any,
        })
      }
    />
  )
}
