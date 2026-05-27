import '@/styles/markdown-styles.css'
import '@mdxeditor/editor/style.css'

import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { GetPageDocumentBySlug } from '#/serverActions/admin/pagedocument.api'
import { MDXEditor } from '@mdxeditor/editor'

export const Route = createFileRoute('/docs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const { data: res } = useSuspenseQuery({
    queryKey: ['docs', id],
    queryFn: () =>
      GetPageDocumentBySlug({
        data: { slug: id },
      }),
  })

  const doc = res.data

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">
        {doc.title}
      </h1>
      {doc.description ? (
        <p className="mt-2 text-muted-foreground">
          {doc.description}
        </p>
      ) : null}

      <div className="mt-8">
        <MDXEditor
          markdown={doc.content ?? ''}
          readOnly
          contentEditableClassName="
            prose
            dark:prose-invert
            max-w-none
            focus:outline-none
          "
        />
      </div>
    </main>
  )
}
