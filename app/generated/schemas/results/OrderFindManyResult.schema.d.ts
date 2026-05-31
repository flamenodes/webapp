import * as z from 'zod';
export declare const OrderFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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