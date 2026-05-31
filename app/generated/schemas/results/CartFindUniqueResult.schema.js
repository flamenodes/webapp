import * as z from 'zod';
export const CartFindUniqueResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    couponCode: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
}));
//# sourceMappingURL=CartFindUniqueResult.schema.js.map