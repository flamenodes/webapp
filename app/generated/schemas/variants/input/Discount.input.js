import * as z from 'zod';
// prettier-ignore
export const DiscountInputSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.unknown())
}).strict();
//# sourceMappingURL=Discount.input.js.map