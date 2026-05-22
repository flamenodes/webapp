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
  headingsPlugin,
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
  Awaited<ReturnType<typeof GetPageDocuments>>['data']
>[number]

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

  // FIX: Unescape markdown loaded from DB
  const initialMarkdown = (document.content || '')
    .replace(/\\#/g, '#')
    .replace(/\\>/g, '>')
    .replace(/\\-/g, '-')
    .replace(/\\\*/g, '*')

  const [markdown, setMarkdown] =
    useState(initialMarkdown)

  const [title, setTitle] = useState(document.title ?? '')
  const [description, setDescription] = useState(document.description ?? '')
  const [slug, setSlug] = useState(document.slug ?? '')
  const [showSlug, setShowSlug] = useState(showSlugInitially)

  const status =
    (document.status as 'DRAFT' | 'PUBLISHED') ??
    'DRAFT'
  const [isSaving, setIsSaving] = useState(false)

  async function persist(
    nextStatus: 'DRAFT' | 'PUBLISHED',
  ) {
    setIsSaving(true)

    try {
      // FIX: Clean markdown before saving
      const content = (
        editorRef.current?.getMarkdown() ??
        markdown
      )
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

      toast.success(
        nextStatus === 'PUBLISHED'
          ? 'Document published.'
          : 'Draft saved.',
      )

      await queryClient.invalidateQueries({
        queryKey: ['page-documents'],
      })
      await queryClient.invalidateQueries({
        queryKey: ['page-document', document.id],
      })

      if (!showSlug && nextStatus === 'DRAFT') {
        setShowSlug(true)
      }

      onClose?.()
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to save document.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="h-full overflow-hidden">
      <div className="flex h-full flex-col bg-background">
        <div className="shrink-0 border-b px-6 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="truncate font-semibold text-xl">
                {title || 'Untitled document'}
              </h1>

              <p className="truncate text-muted-foreground text-sm">
                /docs/{slug || document.slug} • {status}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {onClose ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                >
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
                onClick={() =>
                  persist('PUBLISHED')
                }
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
                onChange={(e) =>
                  setDescription(e.target.value)
                }
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

        <div className="flex-1 overflow-y-auto">
          <MDXEditor
            ref={editorRef}
            markdown={markdown}
            onChange={setMarkdown}
            contentEditableClassName="
              prose
              dark:prose-invert
              max-w-none
              min-h-[1200px]
              p-8
              focus:outline-none
            "
            plugins={[
              headingsPlugin(),
              listsPlugin(),
              quotePlugin(),
              thematicBreakPlugin(),
              markdownShortcutPlugin(),
              linkPlugin(),
              codeBlockPlugin(),
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
