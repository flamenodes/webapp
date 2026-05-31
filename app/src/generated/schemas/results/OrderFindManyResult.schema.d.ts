import * as z from 'zod';
export declare const OrderFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=OrderFindManyResult.schema.d.ts.map