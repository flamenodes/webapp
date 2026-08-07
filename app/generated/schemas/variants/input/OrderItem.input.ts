import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const OrderItemInputSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int(),
    billingPeriod: BillingPeriodSchema,
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.unknown().optional().nullable(),
    configuration: z.unknown().optional().nullable(),
    expiresAt: z.coerce.date().optional().nullable(),
    order: z.unknown(),
    product: z.unknown(),
    server: z.unknown().optional().nullable(),
    createdAt: z.coerce.date()
}).strict();

export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
