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
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { FilePlusCorner, PlusIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Field } from '#/components/ui/field'
import { createPageDocument } from '#/serverActions/admin/pagedocument.api'

export default function CreateDocumentSheet() {
  const [open, setOpen] = React.useState(false)
  const [content, setContent] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [slug, setSlug] = React.useState('')
  const [isSaving, setIsSaving] = React.useState(false)

  const createDocument = async () => {
    setIsSaving(true)
		if (!title || !description || !slug || !content) {
      toast.error('All fields are required')
      setIsSaving(false)
      return
		}
    const res = await createPageDocument({
      data: { title, description, slug, content, status: 'DRAFT' },
    })
    if (!res?.success) {
      toast.error('Failed to create document')
    } else {
      toast.success(res?.message)
    }
    setIsSaving(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>
          <FilePlusCorner className="mr-2 h-4 w-4" />
          Create Document
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto p-6">
        <SheetHeader>
          <SheetTitle>Create Document</SheetTitle>
          <SheetDescription>
            Create a draft document, then write content in the editor.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col justify-between h-full items-center w-full">
          <div className="mt-6 space-y-4 ">
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input
                disabled={isSaving}
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Getting started"
              />
            </Field>

            <Field>
              <Label htmlFor="description">Description</Label>
              <Input
                disabled={isSaving}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short summary for SEO / preview"
              />
            </Field>

            <Field>
              <Label htmlFor="slug">Slug</Label>
              <Input
                disabled={isSaving}
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="getting-started"
              />
              <p className="text-xs text-muted-foreground">
                Slug must be unique. If it already exists, we’ll auto-adjust it.
              </p>
            </Field>
          </div>
        </div>
        <div className="flex gap-6 justify-center w-full">
          <Button onClick={() => setOpen(false)} variant={'outline'}>
            Cancel
          </Button>
          <Button onClick={createDocument} variant={'great'}>
            Save as Draft
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
