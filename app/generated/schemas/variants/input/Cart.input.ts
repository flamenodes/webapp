import * as z from 'zod';
// prettier-ignore
export const CartInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    couponCode: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type CartInputType = z.infer<typeof CartInputSchema>;
