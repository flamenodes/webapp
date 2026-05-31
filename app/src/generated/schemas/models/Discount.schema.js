import * as z from 'zod';
export const DiscountSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
});
//# sourceMappingURL=Discount.schema.js.map