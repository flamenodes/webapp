import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    status: OrderStatusSchema,
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().nullable(),
    deliveryMessage: z.string().nullable(),
    deliveryData: z.any().nullable(),
    items: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type OrderResultType = z.infer<typeof OrderResultSchema>;
