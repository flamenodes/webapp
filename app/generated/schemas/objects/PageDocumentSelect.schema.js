import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    content: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const PageDocumentSelectObjectSchema = makeSchema();
export const PageDocumentSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentSelect.schema.js.map