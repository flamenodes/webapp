import * as z from 'zod';
// prettier-ignore
export const DiscountResultSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.unknown())
}).strict();
//# sourceMappingURL=Discount.result.js.map