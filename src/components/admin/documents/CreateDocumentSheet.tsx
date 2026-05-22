'use client'

import * as React from 'react'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet'
import { CreatePageDocument } from '#/serverActions/admin/pagedocument.api'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function CreateDocumentSheet() {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [slug, setSlug] = React.useState('')
  const [isSaving, setIsSaving] = React.useState(false)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Create Document
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create Document</SheetTitle>
          <SheetDescription>
            Create a draft document, then write content in the editor.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Getting started"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short summary for SEO / preview"
            />
          </div>

          <div className="space-y-2">
            <Label>Slug</Label>
            <Input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="getting-started"
            />
            <p className="text-xs text-muted-foreground">
              Slug must be unique. If it already exists, we’ll auto-adjust it.
            </p>
          </div>

          <Button
            type="button"
            variant="secondary"
            disabled={isSaving}
            onClick={async () => {
              const trimmedTitle = title.trim()
              if (!trimmedTitle) {
                toast.error('Title is required.')
                return
              }

              setIsSaving(true)
              try {
                const created = await CreatePageDocument({
                  data: {
                    title: trimmedTitle,
                    description,
                    slug: slug.trim() || undefined,
                    content: '',
                  },
                })

                toast.success('Draft created.')
                await queryClient.invalidateQueries({
                  queryKey: ['page-documents'],
                })

                setOpen(false)
                setTitle('')
                setDescription('')
                setSlug('')

                await navigate({
                  to: '/admin/documents/$id',
                  params: { id: created.data.id },
                })
              } catch (error) {
                toast.error(
                  error instanceof Error
                    ? error.message
                    : 'Failed to create draft.',
                )
              } finally {
                setIsSaving(false)
              }
            }}
          >
            Save Draft & Open Editor
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
