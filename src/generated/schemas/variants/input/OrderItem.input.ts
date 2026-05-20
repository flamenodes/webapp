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
    specsSnapshot: z.any().optional().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    order: z.any(),
    product: z.any(),
    server: z.any().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
