import * as z from 'zod';
// prettier-ignore
export const CartInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    couponCode: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=Cart.input.js.map