import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    status: OrderStatusSchema,
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().nullable(),
    deliveryMessage: z.string().nullable(),
    deliveryData: z.unknown().nullable(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrderResultType = z.infer<typeof OrderResultSchema>;
