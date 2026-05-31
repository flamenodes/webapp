import * as z from 'zod';
export const OrderStatusSchema = z.enum(['PENDING', 'PAYMENT_FAILED', 'PAID', 'PROCESSING', 'DELIVERED', 'CANCELLED', 'REFUNDED']);
//# sourceMappingURL=OrderStatus.schema.js.map