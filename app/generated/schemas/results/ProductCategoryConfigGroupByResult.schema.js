import * as z from 'zod';
export const ProductCategoryConfigGroupByResultSchema = z.array(z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    _count: z.object({
        id: z.number(),
        category: z.number(),
        billingPeriods: z.number(),
        createdAt: z.number(),
        updatedAt: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable()
    }).nullable().optional()
}));
//# sourceMappingURL=ProductCategoryConfigGroupByResult.schema.js.map