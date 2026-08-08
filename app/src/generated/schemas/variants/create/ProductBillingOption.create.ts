import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionCreateSchema = z.object({
    id: z.string(),
    productId: z.string(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int(),
    customDays: z.number().int().nullable(),
    product: z.any()
}).strict();

export type ProductBillingOptionCreateType = z.infer<typeof ProductBillingOptionCreateSchema>;
