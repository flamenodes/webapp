import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const CartItemCreateSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    billingPeriod: BillingPeriodSchema,
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    configuration: z.any().nullable(),
    cart: z.any(),
    product: z.any()
}).strict();

export type CartItemCreateType = z.infer<typeof CartItemCreateSchema>;
