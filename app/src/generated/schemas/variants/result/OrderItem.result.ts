import * as z from 'zod';
import { BillingPeriodSchema } from '../../enums/BillingPeriod.schema';
// prettier-ignore
export const OrderItemResultSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    billingPeriod: BillingPeriodSchema,
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    productName: z.string(),
    specsSnapshot: z.any().nullable(),
    totalPrice: z.number().int(),
    unitPrice: z.number().int(),
    configuration: z.any().nullable(),
    order: z.any(),
    product: z.any(),
    server: z.any().nullable()
}).strict();

export type OrderItemResultType = z.infer<typeof OrderItemResultSchema>;
