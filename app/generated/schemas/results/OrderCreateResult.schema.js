import * as z from 'zod';
export const OrderCreateResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    status: z.unknown(),
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional(),
    deliveryMessage: z.string().optional(),
    deliveryData: z.unknown().optional(),
    items: z.array(z.unknown()),
    invoice: z.unknown().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
});
//# sourceMappingURL=OrderCreateResult.schema.js.map