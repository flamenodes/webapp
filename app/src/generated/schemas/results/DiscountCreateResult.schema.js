import * as z from 'zod';
export const DiscountCreateResultSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.any())
});
//# sourceMappingURL=DiscountCreateResult.schema.js.map