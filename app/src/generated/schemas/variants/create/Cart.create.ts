import * as z from 'zod';
// prettier-ignore
export const CartCreateSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    items: z.array(z.any()),
    couponCode: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type CartCreateType = z.infer<typeof CartCreateSchema>;
