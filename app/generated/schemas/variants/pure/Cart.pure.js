import * as z from 'zod';
// prettier-ignore
export const CartModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    couponCode: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=Cart.pure.js.map