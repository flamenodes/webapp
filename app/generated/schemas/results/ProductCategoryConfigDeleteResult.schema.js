import * as z from 'zod';
export const ProductCategoryConfigDeleteResultSchema = z.nullable(z.object({
    id: z.string(),
    category: z.unknown(),
    billingPeriods: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}));
//# sourceMappingURL=ProductCategoryConfigDeleteResult.schema.js.map