import * as z from 'zod';
export declare const OrderInputSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
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
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    deliveryMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    deliveryData: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    items: z.ZodArray<z.ZodUnknown>;
    invoice: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type OrderInputType = z.infer<typeof OrderInputSchema>;
//# sourceMappingURL=Order.input.d.ts.map