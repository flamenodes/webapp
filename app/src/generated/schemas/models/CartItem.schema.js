import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
export const CartItemSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int().default(1),
    billingPeriod: BillingPeriodSchema.default("MONTHLY"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});
//# sourceMappingURL=CartItem.schema.js.map