import * as z from 'zod';
export declare const OrderCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    status: z.ZodAny;
    subtotalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    totalAmount: z.ZodNumber;
    couponCode: z.ZodOptional<z.ZodString>;
    deliveryMessage: z.ZodOptional<z.ZodString>;
    deliveryData: z.ZodOptional<z.ZodAny>;
    items: z.ZodArray<z.ZodAny>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=OrderCreateResult.schema.d.ts.map