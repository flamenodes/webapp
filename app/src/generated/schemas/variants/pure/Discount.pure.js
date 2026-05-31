import * as z from 'zod';
// prettier-ignore
export const DiscountModelSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.any())
}).strict();
//# sourceMappingURL=Discount.pure.js.map