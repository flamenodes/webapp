import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    slug: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    content: z.literal(true).optional(),
    status: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const PageDocumentCountAggregateInputObjectSchema = makeSchema();
export const PageDocumentCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentCountAggregateInput.schema.js.map