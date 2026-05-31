import * as z from 'zod';
export const OrderItemUpdateResultSchema = z.nullable(z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int(),
    billingPeriod: z.any(),
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.any().optional(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
    order: z.any(),
    product: z.any(),
    server: z.any().optional(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));
//# sourceMappingURL=OrderItemUpdateResult.schema.js.map