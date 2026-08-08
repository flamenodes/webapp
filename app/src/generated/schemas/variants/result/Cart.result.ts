import * as z from 'zod';
// prettier-ignore
export const CartResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    couponCode: z.string().nullable(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    user: z.any(),
    items: z.array(z.any())
}).strict();

export type CartResultType = z.infer<typeof CartResultSchema>;
