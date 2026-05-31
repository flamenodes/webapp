import * as z from 'zod';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
export const OrderItemSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().int().default(1),
    billingPeriod: BillingPeriodSchema,
    unitPrice: z.number().int(),
    totalPrice: z.number().int(),
    specsSnapshot: z.any().refine((val) => { const getDepth = (obj, depth = 0) => { if (depth > 10)
        return depth; if (obj === null || typeof obj !== 'object')
        return depth; const values = Object.values(obj); if (values.length === 0)
        return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullish(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
});
//# sourceMappingURL=OrderItem.schema.js.map