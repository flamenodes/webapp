import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    status: OrderStatusSchema,
    subtotalAmount: z.number().int(),
    discountAmount: z.number().int(),
    totalAmount: z.number().int(),
    couponCode: z.string().optional().nullable(),
    deliveryMessage: z.string().optional().nullable(),
    deliveryData: z.unknown().optional().nullable(),
    items: z.array(z.unknown()),
    invoice: z.unknown().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
