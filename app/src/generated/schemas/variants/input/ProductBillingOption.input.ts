import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    customDays: z.number().int().optional().nullable(),
    product: z.any()
}).strict();

export type ProductBillingOptionInputType = z.infer<typeof ProductBillingOptionInputSchema>;
