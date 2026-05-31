import '@/styles/markdown-styles.css'
import '@mdxeditor/editor/style.css'

import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  MDXEditor,
  type MDXEditorMethods,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from '@mdxeditor/editor'
import { useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

import {
  UpdatePageDocument,
  GetPageDocuments,
} from '#/serverActions/admin/pagedocument.api'

type PageDocumentRecord = NonNullable<
  Awaited<ReturnType<typeof GetPageDocuments>>
>['resData'][number]

export default function DocumentEditor({
  document,
  showSlugInitially = true,
  onClose,
}: {
  document: PageDocumentRecord
  showSlugInitially?: boolean
  onClose?: () => void
}) {
  const queryClient = useQueryClient()
  const editorRef = useRef<MDXEditorMethods>(null)

  // Unescape markdown that may have been over-escaped on previous saves
  const initialMarkdown = (document.content || '')
    .replace(/\\#/g, '#')
    .replace(/\\>/g, '>')
    .replace(/\\-/g, '-')
    .replace(/\\\*/g, '*')

  const [title, setTitle] = useState(document.title ?? '')
  const [description, setDescription] = useState(document.description ?? '')
  const [slug, setSlug] = useState(document.slug ?? '')
  const [showSlug, setShowSlug] = useState(showSlugInitially)
  const [currentStatus, setCurrentStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    (document.status as 'DRAFT' | 'PUBLISHED') ?? 'DRAFT',
  )
  const [isSaving, setIsSaving] = useState(false)

  async function persist(nextStatus: 'DRAFT' | 'PUBLISHED') {
    setIsSaving(true)
    try {
      // Clean any over-escaped characters before saving
      const content = (editorRef.current?.getMarkdown() ?? '')
        .replace(/\\#/g, '#')
        .replace(/\\>/g, '>')
        .replace(/\\-/g, '-')
        .replace(/\\\*/g, '*')

      await UpdatePageDocument({
        data: {
          id: document.id,
          content,
          status: nextStatus,
          title,
          description,
          ...(showSlug ? { slug } : {}),
        },
      })

      setCurrentStatus(nextStatus)

      if (!showSlug) {
        setShowSlug(true)
      }

      toast.success(
        nextStatus === 'PUBLISHED' ? 'Document published.' : 'Draft saved.',
      )

      // Only invalidate the list so the table stays fresh; do NOT invalidate
      // the per-document query or the editor will re-mount and lose state.
      await queryClient.invalidateQueries({ queryKey: ['page-documents'] })
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to save document.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="h-full overflow-hidden">
      <div className="flex h-full flex-col bg-background">
        {/* ── Header ── */}
        <div className="shrink-0 border-b px-6 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="truncate font-semibold text-xl">
                {title || 'Untitled document'}
              </h1>
              <p className="truncate text-muted-foreground text-sm">
                /docs/{slug || document.slug} •{' '}
                <span
                  className={
                    currentStatus === 'PUBLISHED'
                      ? 'text-green-500'
                      : 'text-yellow-500'
                  }
                >
                  {currentStatus}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              {onClose ? (
                <Button type="button" variant="outline" onClick={onClose}>
                  Back
                </Button>
              ) : null}

              <Button
                type="button"
                variant="secondary"
                disabled={isSaving}
                onClick={() => persist('DRAFT')}
              >
                Save Draft
              </Button>

              <Button
                type="button"
                disabled={isSaving}
                onClick={() => persist('PUBLISHED')}
              >
                Publish
              </Button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <Label>Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Document title"
              />
            </div>

            <div className="md:col-span-1">
              <Label>Description</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description"
              />
            </div>

            <div className="md:col-span-1">
              <Label>Slug</Label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="my-doc-page"
                disabled={!showSlug}
              />
              {!showSlug ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  Save draft once to unlock slug editing.
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* ── Editor ── */}
        <div className="flex-1 overflow-y-auto">
          <MDXEditor
            ref={editorRef}
            markdown={initialMarkdown}
            contentEditableClassName="prose dark:prose-invert max-w-none min-h-[1200px] p-8 focus:outline-none"
            plugins={[
              headingsPlugin(),
              listsPlugin(),
              quotePlugin(),
              thematicBreakPlugin(),
              markdownShortcutPlugin(),
              linkPlugin(),
              linkDialogPlugin(),
              codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
              codeMirrorPlugin({
                codeBlockLanguages: {
                  '': 'Plain text',
                  txt: 'Plain text',
                  js: 'JavaScript',
                  jsx: 'JavaScript (JSX)',
                  ts: 'TypeScript',
                  tsx: 'TypeScript (TSX)',
                  css: 'CSS',
                  html: 'HTML',
                  json: 'JSON',
                  bash: 'Bash',
                  sh: 'Shell',
                  sql: 'SQL',
                  py: 'Python',
                  md: 'Markdown',
                },
              }),
              toolbarPlugin({
                toolbarClassName:
                  'sticky top-0 z-50 border-b bg-background',
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <ListsToggle />
                    <CreateLink />
                    <CodeToggle />
                    <InsertThematicBreak />
                  </>
                ),
              }),
            ]}
          />
        </div>
      </div>
    </main>
  )
}
