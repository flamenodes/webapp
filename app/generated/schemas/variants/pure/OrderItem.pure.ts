import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const OrderItemModelSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int(),
    billingPeriod: BillingPeriodSchema,
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.unknown().nullable(),
    configuration: z.unknown().nullable(),
    expiresAt: z.date().nullable(),
    order: z.unknown(),
    product: z.unknown(),
    server: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type OrderItemPureType = z.infer<typeof OrderItemModelSchema>;
