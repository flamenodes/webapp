import * as z from 'zod';
export const OrderItemAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        orderId: z.number(),
        productId: z.number(),
        productName: z.number(),
        quantity: z.number(),
        billingPeriod: z.number(),
        unitPrice: z.number(),
        totalPrice: z.number(),
        specsSnapshot: z.number(),
        configuration: z.number(),
        expiresAt: z.number(),
        order: z.number(),
        product: z.number(),
        server: z.number(),
        createdAt: z.number()
    }).optional(),
    _sum: z.object({
        quantity: z.number().nullable(),
        unitPrice: z.number().nullable(),
        totalPrice: z.number().nullable()
    }).nullable().optional(),
    _avg: z.object({
        quantity: z.number().nullable(),
        unitPrice: z.number().nullable(),
        totalPrice: z.number().nullable()
    }).nullable().optional(),
    _min: z.object({
        id: z.string().nullable(),
        orderId: z.string().nullable(),
        productId: z.string().nullable(),
        productName: z.string().nullable(),
        quantity: z.number().int().nullable(),
        unitPrice: z.number().int().nullable(),
        totalPrice: z.number().int().nullable(),
        expiresAt: z.date().nullable(),
        createdAt: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        orderId: z.string().nullable(),
        productId: z.string().nullable(),
        productName: z.string().nullable(),
        quantity: z.number().int().nullable(),
        unitPrice: z.number().int().nullable(),
        totalPrice: z.number().int().nullable(),
        expiresAt: z.date().nullable(),
        createdAt: z.date().nullable()
    }).nullable().optional() });
//# sourceMappingURL=OrderItemAggregateResult.schema.js.map