import * as z from 'zod';
export const CartFindUniqueResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    items: z.array(z.any()),
    couponCode: z.string().optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));
//# sourceMappingURL=CartFindUniqueResult.schema.js.map