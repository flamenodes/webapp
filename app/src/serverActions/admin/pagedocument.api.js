import { prisma } from '#/db';
import { createServerFn } from '@tanstack/react-start';
import { PageDocumentInputSchema } from '../../../generated/schemas';
import z from 'zod';
const createPageSchema = PageDocumentInputSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
const updatePageSchema = PageDocumentInputSchema.omit({
    createdAt: true,
    updatedAt: true,
});
const getPageSchema = z.object({
    id: z.string(),
});
export const createPageDocument = createServerFn({ method: 'POST' })
    .inputValidator(createPageSchema)
    .handler(async ({ data }) => {
    try {
        const res = await prisma.pageDocument.create({ data });
        return { success: true, message: 'Page created successfully.', res };
    }
    catch (err) { }
});
export const updatePageDocument = createServerFn({ method: 'POST' })
    .inputValidator(updatePageSchema)
    .handler(async ({ data }) => {
    try {
        const { id, ...updateData } = data;
        const res = await prisma.pageDocument.update({
            where: { id: data.id },
            data: updateData,
        });
        return { success: true, message: 'Page created successfully.', res };
    }
    catch (err) { }
});
export const getPageDocument = createServerFn({ method: 'POST' })
    .inputValidator(getPageSchema)
    .handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.findFirst({ where: { id: data.id } });
        return { resData };
    }
    catch (err) { }
});
export const getPageDocumentBySlug = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ slug: z.string() }))
    .handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.findFirst({
            where: { slug: data.slug },
        });
        return { resData };
    }
    catch (err) {
        console.error(err);
    }
});
export const getPageDocuments = createServerFn({ method: 'POST' }).inputValidator(z.object({
    pageCount: z.number().optional(),
})).handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.findMany({
            take: data.pageCount,
        });
        return { resData };
    }
    catch (err) {
        console.error(err);
    }
});
export const deletePageDocumentbySlug = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ slug: z.string() }))
    .handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.delete({
            where: { slug: data.slug },
        });
        return { resData };
    }
    catch (err) {
        console.error(err);
    }
});
export const deletePageDocumentbyId = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ id: z.string() }))
    .handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.delete({
            where: { id: data.id },
        });
        return { resData };
    }
    catch (err) {
        console.error(err);
    }
});
export const deletePageDocuments = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ ids: z.array(z.string()) }))
    .handler(async ({ data }) => {
    try {
        const resData = await prisma.pageDocument.deleteMany({
            where: { id: { in: data.ids } },
        });
        return { success: true, deleted: resData.count };
    }
    catch (err) {
        console.error(err);
        throw new Error('Failed to delete documents');
    }
});
// PascalCase exports for consistency with imports
export const GetPageDocumentBySlug = getPageDocumentBySlug;
export const UpdatePageDocument = updatePageDocument;
export const GetPageDocuments = getPageDocuments;
//# sourceMappingURL=pagedocument.api.js.map