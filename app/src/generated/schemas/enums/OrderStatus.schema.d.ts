import * as z from 'zod';
export declare const OrderStatusSchema: z.ZodEnum<{
    PENDING: "PENDING";
    PAYMENT_FAILED: "PAYMENT_FAILED";
    PAID: "PAID";
    PROCESSING: "PROCESSING";
    DELIVERED: "DELIVERED";
    CANCELLED: "CANCELLED";
    REFUNDED: "REFUNDED";
}>;
export type OrderStatus = z.infer<typeof OrderStatusSchema>;
//# sourceMappingURL=OrderStatus.schema.d.ts.map