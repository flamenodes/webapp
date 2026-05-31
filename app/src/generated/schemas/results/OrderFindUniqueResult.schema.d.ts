import * as z from 'zod';
export declare const OrderFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
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
}, z.core.$strip>>;
//# sourceMappingURL=OrderFindUniqueResult.schema.d.ts.map