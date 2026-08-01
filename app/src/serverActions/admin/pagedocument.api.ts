import { prisma } from '#/db'
import { createServerFn } from '@tanstack/react-start'
import { PageDocumentInputSchema } from '../../../generated/schemas'
import z from 'zod'

const createPageSchema = PageDocumentInputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

const updatePageSchema = PageDocumentInputSchema.omit({
  createdAt: true,
  updatedAt: true,
})

const getPageSchema = z.object({
  id: z.string(),
})

export const createPageDocument = createServerFn({ method: 'POST' })
  .validator(createPageSchema)
  .handler(async ({ data }) => {
    try {
      const res = await prisma.pageDocument.create({ data })

      return { success: true, message: 'Page created successfully.', res }
    } catch (err) {
      console.error('Error creating page document:', err)
      return { success: false, message: 'Failed to create page document.' }
    }
  })

export const updatePageDocument = createServerFn({ method: 'POST' })
  .validator(updatePageSchema)
  .handler(async ({ data }) => {
    try {
      const { id, ...updateData } = data
      const res = await prisma.pageDocument.update({
        where: { id: data.id },
        data: updateData,
      })

      return { success: true, message: 'Page updated successfully.', res }
    } catch (err) {
      console.error('Error updating page document:', err)
      return { success: false, message: 'Failed to update page document.' }
    }
  })

export const getPageDocument = createServerFn({ method: 'POST' })
  .validator(getPageSchema)
  .handler(async ({ data }) => {
    try {
      const resData = await prisma.pageDocument.findFirst({ where: { id: data.id } })
      return { resData, success: true }
    } catch (err) {
      console.error('Error fetching page document:', err)
      return { resData: null, success: false }
    }
  })

export const getPageDocumentBySlug = createServerFn({ method: 'POST' })
  .validator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => {
    try {
      const resData = await prisma.pageDocument.findFirst({
        where: { slug: data.slug },
      })
      return { resData, success: true }
    } catch (err) {
      console.error('Error fetching document by slug:', err)
      return { resData: null, success: false }
    }
  })
export const getPageDocuments = createServerFn({ method: 'POST' }).validator(z.object({
	pageCount: z.number().optional(),
})).handler(async ({ data }) => {
  try {
    const resData = await prisma.pageDocument.findMany({
      take: data.pageCount,
    })
    return { resData }
  } catch (err) {
    console.error(err)
  }
})

export const deletePageDocumentbySlug = createServerFn({ method: 'POST' })
  .validator(z.object({ slug: z.string() }))
  .handler(async ({ data }) => {
    try {
      const resData = await prisma.pageDocument.delete({
        where: { slug: data.slug },
      })
      return { resData }
    } catch (err) {
      console.error(err)
    }
  })

export const deletePageDocumentbyId = createServerFn({ method: 'POST' })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    try {
      const resData = await prisma.pageDocument.delete({
        where: { id: data.id },
      })
      return { resData }
    } catch (err) {
      console.error(err)
    }
  })

export const deletePageDocuments = createServerFn({ method: 'POST' })
  .validator(z.object({ ids: z.array(z.string()) }))
  .handler(async ({ data }) => {
    try {
      const resData = await prisma.pageDocument.deleteMany({
        where: { id: { in: data.ids } },
      })
      return { success: true, deleted: resData.count }
    } catch (err) {
      console.error(err)
      throw new Error('Failed to delete documents')
    }
  })

// PascalCase exports for consistency with imports
export const GetPageDocumentBySlug = getPageDocumentBySlug
export const UpdatePageDocument = updatePageDocument
export const GetPageDocuments = getPageDocuments
