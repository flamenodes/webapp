import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const ProductBillingOptionResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    billingPeriod: BillingPeriodSchema,
    price: z.number().int()
}).strict();
//# sourceMappingURL=ProductBillingOption.result.js.map