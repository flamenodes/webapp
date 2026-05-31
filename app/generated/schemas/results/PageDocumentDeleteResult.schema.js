import * as z from 'zod';
export const PageDocumentDeleteResultSchema = z.nullable(z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    status: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}));
//# sourceMappingURL=PageDocumentDeleteResult.schema.js.map