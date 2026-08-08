import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    customDays: z.number().int().nullable(),
    product: z.any()
}).strict();

export type ProductBillingOptionResultType = z.infer<typeof ProductBillingOptionResultSchema>;
