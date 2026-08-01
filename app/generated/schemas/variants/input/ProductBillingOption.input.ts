import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    customDays: z.number().int().optional().nullable()
}).strict();

export type ProductBillingOptionInputType = z.infer<typeof ProductBillingOptionInputSchema>;
