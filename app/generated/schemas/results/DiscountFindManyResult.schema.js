import * as z from 'zod';
export const DiscountFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        label: z.string(),
        percentage: z.number().int(),
        product: z.array(z.unknown())
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=DiscountFindManyResult.schema.js.map