import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { auth } from '@/lib/auth'
import { z } from 'zod'

const pageStatusSchema = z.enum([
  'PUBLISHED',
  'DRAFT',
])

const getPageDocumentSchema = z.object({
  id: z.string(),
})

const getPageDocumentBySlugSchema = z.object({
  slug: z.string().trim().min(1),
  includeDrafts: z.boolean().optional(),
})

const createPageDocumentSchema = z.object({
  title: z.string().trim().min(1).default('Untitled'),
  description: z.string().trim().default(''),
  content: z.string().default(''),
})

const updatePageDocumentSchema = z.object({
  id: z.string(),
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().optional(),
  content: z.string().optional(),
  status: pageStatusSchema.optional(),
  slug: z.string().trim().min(1).optional(),
})

const deletePageDocumentSchema = z.object({
  id: z.string(),
})

async function requireSessionUser() {
  const headers = getRequestHeaders()
  const session =
    await auth.api.getSession({
      headers,
    })

  if (!session?.user) {
    throw new Error('Unauthorized')
  }

  return session.user
}

function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function ensureUniqueSlug(
  base: string,
  opts?: { excludeId?: string },
) {
  const root = slugify(base) || 'doc'
  let candidate = root
  let suffix = 2

  while (true) {
    const existing =
      await prisma.pageDocument.findFirst({
        where: {
          slug: candidate,
          ...(opts?.excludeId
            ? { id: { not: opts.excludeId } }
            : {}),
        },
        select: { id: true },
      })

    if (!existing) {
      return candidate
    }

    candidate = `${root}-${suffix}`
    suffix += 1
  }
}

export const GetPageDocuments = createServerFn({
  method: 'GET',
}).handler(async () => {
    await requireSessionUser()

    const documents =
      await prisma.pageDocument.findMany({
        orderBy: [
          { title: 'asc' },
        ],
      })

    return {
      success: true,
      data: documents,
    }
  })

export const GetPageDocument = createServerFn({
  method: 'GET',
})
  .inputValidator(getPageDocumentSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const document =
      await prisma.pageDocument.findUnique({
        where: { id: data.id },
      })

    if (!document) {
      throw new Error('Document not found')
    }

    return {
      success: true,
      data: document,
    }
  })

export const GetPageDocumentBySlug = createServerFn({
  method: 'GET',
})
  .inputValidator(getPageDocumentBySlugSchema)
  .handler(async ({ data }) => {
    const doc =
      await prisma.pageDocument.findUnique({
        where: { slug: data.slug },
      })

    if (!doc) {
      throw new Error('Document not found')
    }

    if (
      doc.status !== 'PUBLISHED' &&
      !data.includeDrafts
    ) {
      throw new Error('Document not found')
    }

    return {
      success: true,
      data: doc,
    }
  })

export const CreatePageDocument = createServerFn({
  method: 'POST',
})
  .inputValidator(createPageDocumentSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const title = data.title?.trim() || 'Untitled'
    const slug = await ensureUniqueSlug(title)

    const created =
      await prisma.pageDocument.create({
        data: {
          title,
          slug,
          description:
            data.description?.trim() || '',
          content: data.content || '',
          status: 'DRAFT',
        },
      })

    return {
      success: true,
      data: created,
    }
  })

export const UpdatePageDocument = createServerFn({
  method: 'POST',
})
  .inputValidator(updatePageDocumentSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const existing =
      await prisma.pageDocument.findUnique({
        where: { id: data.id },
        select: { id: true, slug: true },
      })

    if (!existing) {
      throw new Error('Document not found')
    }

    const nextSlug =
      typeof data.slug === 'string'
        ? await ensureUniqueSlug(data.slug, {
            excludeId: data.id,
          })
        : undefined

    const updated =
      await prisma.pageDocument.update({
        where: { id: data.id },
        data: {
          ...(typeof data.title === 'string'
            ? { title: data.title.trim() }
            : {}),
          ...(typeof data.description === 'string'
            ? {
                description:
                  data.description.trim(),
              }
            : {}),
          ...(typeof data.content === 'string'
            ? { content: data.content }
            : {}),
          ...(typeof data.status === 'string'
            ? { status: data.status }
            : {}),
          ...(nextSlug
            ? { slug: nextSlug }
            : {}),
        },
      })

    return {
      success: true,
      data: updated,
    }
  })

export const DeletePageDocument = createServerFn({
  method: 'POST',
})
  .inputValidator(deletePageDocumentSchema)
  .handler(async ({ data }) => {
    await requireSessionUser()

    const deleted =
      await prisma.pageDocument.delete({
        where: { id: data.id },
      })

    return {
      success: true,
      data: deleted,
    }
  })
