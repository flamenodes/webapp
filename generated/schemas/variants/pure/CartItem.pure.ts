import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const CartItemModelSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    billingPeriod: BillingPeriodSchema,
    cart: z.unknown(),
    product: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CartItemPureType = z.infer<typeof CartItemModelSchema>;
