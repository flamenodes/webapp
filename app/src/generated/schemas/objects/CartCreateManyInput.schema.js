import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    couponCode: z.string().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const CartCreateManyInputObjectSchema = makeSchema();
export const CartCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCreateManyInput.schema.js.map