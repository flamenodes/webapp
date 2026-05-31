import * as z from 'zod';
export declare const OrderSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>;
    subtotalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    totalAmount: z.ZodNumber;
    couponCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    deliveryMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    deliveryData: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type OrderType = z.infer<typeof OrderSchema>;
//# sourceMappingURL=Order.schema.d.ts.map