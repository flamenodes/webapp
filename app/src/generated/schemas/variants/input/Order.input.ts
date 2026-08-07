import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    status: OrderStatusSchema,
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional().nullable(),
    deliveryMessage: z.string().optional().nullable(),
    deliveryData: z.any().optional().nullable(),
    items: z.array(z.any()),
    invoice: z.any().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
