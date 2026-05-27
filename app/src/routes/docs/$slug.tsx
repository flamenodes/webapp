import '@/styles/markdown-styles.css'
import '@mdxeditor/editor/style.css'

import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getPageDocumentBySlug } from '#/serverActions/admin/pagedocument.api'
import { Spotlight } from '#/components/ui/spotlight-new'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkAlert from 'remark-github-blockquote-alert'

import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Route = createFileRoute('/docs/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()

  const { data: res } = useSuspenseQuery({
    queryKey: ['docs', slug],
    queryFn: () =>
      getPageDocumentBySlug({
        data: { slug: slug },
      }),
  })

  const doc = res?.resData

  return (
    <main className="mx-auto w-full  px-6 py-30 relative flex flex-col items-center">
      <div>
        <h1 className="text-center text-4xl font-angkor font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 dark:from-rose-400 dark:via-pink-300 dark:to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(244,63,94,0.45)]">
          {doc?.title}
        </h1>
        {doc?.description ? (
          <p className="mt-2 text-muted-foreground text-center">
            {doc.description}
          </p>
        ) : null}

        <div className="mt-10 prose prose-sm dark:prose-invert text-center">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkAlert]}
            rehypePlugins={[
              rehypeRaw,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'append' }],
            ]}
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="rounded-2xl border border-white/10 shadow-2xl"
                />
              ),
            }}
          >
            {doc?.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  )
}
