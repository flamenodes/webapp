import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionModelSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.any(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    customDays: z.number().int().nullable()
}).strict();

export type ProductBillingOptionPureType = z.infer<typeof ProductBillingOptionModelSchema>;
