import '@/styles/markdown-styles.css'
import 'react-markdown-editor-lite/lib/index.css'

import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import React, { useRef, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
  UpdatePageDocument,
  GetPageDocuments,
} from '#/serverActions/admin/pagedocument.api'

const mdParser = new MarkdownIt()

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
  const editorRef = useRef<{ getText: () => string } | null>(null)

  const [title, setTitle] = useState(document.title ?? '')
  const [description, setDescription] = useState(document.description ?? '')
  const [slug, setSlug] = useState(document.slug ?? '')
  const [showSlug, setShowSlug] = useState(showSlugInitially)
  const [currentStatus, setCurrentStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    (document.status as 'DRAFT' | 'PUBLISHED') ?? 'DRAFT',
  )
  const [isSaving, setIsSaving] = useState(false)
  const [content, setContent] = useState(document.content || '')

  async function persist(nextStatus: 'DRAFT' | 'PUBLISHED') {
    setIsSaving(true)
    
    try {
      const result = await UpdatePageDocument({
        data: {
          id: document.id,
          content,
          status: nextStatus,
          title,
          description,
          ...(showSlug ? { slug } : {}),
        },
      })

      if (!result?.success) {
        throw new Error(result?.message || 'Failed to save document')
      }

      setCurrentStatus(nextStatus)

      if (!showSlug) {
        setShowSlug(true)
      }

      toast.success(
        nextStatus === 'PUBLISHED' ? 'Document published.' : 'Draft saved.',
      )

      await queryClient.invalidateQueries({ queryKey: ['page-documents'] })
      await queryClient.invalidateQueries({ queryKey: ['page-document', document.id] })
      await queryClient.invalidateQueries({ queryKey: ['docs', slug] })
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to save document.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  function handleEditorChange({ text }: { html: string; text: string }) {
    setContent(text)
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
        <div className="flex-1 overflow-hidden">
          <MdEditor
            ref={editorRef}
            value={content}
            style={{ height: '100%' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </div>
      </div>
    </main>
  )
}
