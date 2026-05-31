import * as z from 'zod';
export const OrderFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    status: z.any(),
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional(),
    deliveryMessage: z.string().optional(),
    deliveryData: z.any().optional(),
    items: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}));
//# sourceMappingURL=OrderFindFirstResult.schema.js.map