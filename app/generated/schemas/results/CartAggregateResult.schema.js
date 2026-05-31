import * as z from 'zod';
export const CartAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        userId: z.number(),
        user: z.number(),
        items: z.number(),
        couponCode: z.number(),
        createdAt: z.number(),
        updatedAt: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        couponCode: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        couponCode: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional() });
//# sourceMappingURL=CartAggregateResult.schema.js.map