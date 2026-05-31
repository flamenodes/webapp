import * as z from 'zod';
export declare const OrderResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    status: z.ZodEnum<{
        PENDING: "PENDING";
        PAYMENT_FAILED: "PAYMENT_FAILED";
        PAID: "PAID";
        PROCESSING: "PROCESSING";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>;
    subtotalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    totalAmount: z.ZodNumber;
    couponCode: z.ZodNullable<z.ZodString>;
    deliveryMessage: z.ZodNullable<z.ZodString>;
    deliveryData: z.ZodNullable<z.ZodAny>;
    items: z.ZodArray<z.ZodAny>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type OrderResultType = z.infer<typeof OrderResultSchema>;
//# sourceMappingURL=Order.result.d.ts.map