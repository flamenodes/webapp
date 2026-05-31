import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
export const OrderSchema = z.object({
    id: z.string(),
    userId: z.string(),
    status: OrderStatusSchema.default("PENDING"),
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().nullish(),
    deliveryMessage: z.string().nullish(),
    deliveryData: z.any().refine((val) => { const getDepth = (obj, depth = 0) => { if (depth > 10)
        return depth; if (obj === null || typeof obj !== 'object')
        return depth; const values = Object.values(obj); if (values.length === 0)
        return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});
//# sourceMappingURL=Order.schema.js.map