import * as z from 'zod';
// prettier-ignore
export const DiscountInputSchema = z.object({
    id: z.string(),
    label: z.string(),
    percentage: z.number().int(),
    product: z.array(z.any())
}).strict();

export type DiscountInputType = z.infer<typeof DiscountInputSchema>;
