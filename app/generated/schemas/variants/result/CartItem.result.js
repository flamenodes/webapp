import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const CartItemResultSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    billingPeriod: BillingPeriodSchema,
    configuration: z.unknown().nullable(),
    cart: z.unknown(),
    product: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=CartItem.result.js.map