import '@/styles/markdown-styles.css'

import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getPageDocumentBySlug } from '#/serverActions/admin/pagedocument.api'
import MarkdownIt from 'markdown-it'
import { useMemo } from 'react'
import { seo } from '#/utils/seo'

const mdParser = new MarkdownIt({ html: true })

export const Route = createFileRoute('/docs/$slug')({
  head: () => ({
    meta: seo({
      title: 'Docs | Flame Nodes',
      description: 'Flame Nodes documentation — guides, tutorials, and reference material for all our hosting services.',
      image: '/flamenodes.png',
    }),
  }),
  component: RouteComponent,
  pendingComponent: () => (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading document...</p>
      </div>
    </div>
  ),
})

interface Heading {
  text: string
  id: string
}

function extractH1Headings(markdown: string): Heading[] {
  const headings: Heading[] = []
  const lines = markdown.split('\n')
  
  for (const line of lines) {
    const match = line.match(/^#\s+(.+)$/)
    if (match) {
      const text = match[1].trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      headings.push({ text, id })
    }
  }
  
  return headings
}

function RouteComponent() {
  const { slug } = Route.useParams()

  const { data: res } = useSuspenseQuery({
    queryKey: ['docs', slug],
    queryFn: async () => {
      const result = await getPageDocumentBySlug({
        data: { slug: slug },
      })
      return result
    },
  })

  const doc = res?.resData

  if (!doc) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Document Not Found</h1>
          <p className="text-base text-muted-foreground mb-2">
            The document <span className="font-mono font-semibold text-foreground bg-accent px-2 py-1 rounded">{slug}</span> could not be found.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            It may have been removed, renamed, or never existed.
          </p>
          <a 
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 h-10 px-6 py-2 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Homepage
          </a>
        </div>
      </main>
    )
  }

  const content = doc.content || ''
  
  const headings = useMemo(() => extractH1Headings(content), [content])
  
  // Generate HTML with IDs for H1 headings
  const htmlContent = useMemo(() => {
    let html = mdParser.render(content)
    
    // Add IDs to H1 tags
    headings.forEach(({ id, text }) => {
      html = html.replace(
        new RegExp(`<h1>\\s*${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</h1>`, 'i'),
        `<h1 id="${id}">${text}</h1>`
      )
    })
    
    return html
  }, [content, headings])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="flex gap-8 relative">
          {/* Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden xl:block w-72 shrink-0">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-accent/40 via-accent/30 to-accent/20 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-border/50">
                  <nav className="space-y-1">
                    <h2 className="font-bold text-sm mb-4 text-foreground tracking-tight flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      On this page
                    </h2>
                    <div className="space-y-0.5 border-l-2 border-primary/30 pl-3">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className="block py-2 px-2.5 text-[13px] text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-all duration-200 font-medium"
                        >
                          {heading.text}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </aside>
          )}
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-br from-primary/5 via-accent/30 to-background px-8 sm:px-12 py-12 text-center border-b border-border/50">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 dark:from-rose-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  {doc.title}
                </h1>
                {doc.description && (
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {doc.description}
                  </p>
                )}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Last updated: {new Date(doc.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="bg-background/95 backdrop-blur-sm px-8 sm:px-12 py-10">
                {content ? (
                  <article className="prose prose-base dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-5 prose-h1:mt-10 prose-h1:bg-gradient-to-r prose-h1:from-rose-500 prose-h1:via-pink-500 prose-h1:to-red-500 dark:prose-h1:from-rose-400 dark:prose-h1:via-pink-400 dark:prose-h1:to-red-400 prose-h1:bg-clip-text prose-h1:text-transparent prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8 prose-h2:text-foreground prose-h3:text-xl prose-h3:mb-2.5 prose-h3:mt-6 prose-h3:text-foreground prose-p:leading-relaxed prose-p:text-foreground/90 prose-p:text-[15px] prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:text-foreground prose-strong:font-semibold prose-code:text-[13px] prose-code:bg-accent/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-code:border prose-code:border-border/30 prose-pre:bg-accent/40 prose-pre:border prose-pre:border-border/50 prose-pre:shadow-inner prose-pre:text-sm prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-border prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 prose-li:text-[15px]">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </article>
                ) : (
                  <div className="text-center py-16 px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 border border-border/50 shadow-lg mb-5">
                      <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">No content available</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">This document is empty. Please add content using the admin editor.</p>
                  </div>
                )}

                {/* Back to top button */}
                {content && (
                  <div className="mt-12 pt-6 border-t border-border/50 flex justify-center">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground bg-accent/30 hover:bg-accent/50 px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      Back to top
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
