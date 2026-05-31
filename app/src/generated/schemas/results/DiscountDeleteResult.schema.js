import * as z from 'zod';
export const DiscountDeleteResultSchema = z.nullable(z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.any())
}));
//# sourceMappingURL=DiscountDeleteResult.schema.js.map