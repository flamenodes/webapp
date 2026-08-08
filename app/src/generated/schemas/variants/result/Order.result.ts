import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    totalAmount: z.number().int(),
    status: OrderStatusSchema,
    deliveryMessage: z.string().nullable(),
    deliveryData: z.any().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    couponCode: z.string().nullable(),
    discountAmount: z.number().int(),
    subtotalAmount: z.number().int(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    invoice: z.any().nullable(),
    renewalForServerId: z.string().nullable(),
    renewalForServer: z.any().nullable(),
    user: z.any(),
    items: z.array(z.any())
}).strict();

export type OrderResultType = z.infer<typeof OrderResultSchema>;
