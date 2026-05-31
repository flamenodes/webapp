import * as z from 'zod';
export declare const OrderFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    status: z.ZodUnknown;
    subtotalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    totalAmount: z.ZodNumber;
    couponCode: z.ZodOptional<z.ZodString>;
    deliveryMessage: z.ZodOptional<z.ZodString>;
    deliveryData: z.ZodOptional<z.ZodUnknown>;
    items: z.ZodArray<z.ZodUnknown>;
    invoice: z.ZodOptional<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=OrderFindFirstResult.schema.d.ts.map