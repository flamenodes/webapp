import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    totalAmount: z.number().int(),
    status: OrderStatusSchema,
    deliveryMessage: z.string().optional().nullable(),
    deliveryData: z.any().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    couponCode: z.string().optional().nullable(),
    discountAmount: z.number().int(),
    subtotalAmount: z.number().int(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    invoice: z.any().optional().nullable(),
    renewalForServerId: z.string().optional().nullable(),
    renewalForServer: z.any().optional().nullable(),
    user: z.any(),
    items: z.array(z.any())
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
