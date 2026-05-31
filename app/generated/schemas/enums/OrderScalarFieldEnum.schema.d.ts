import * as z from 'zod';
export declare const OrderScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    userId: "userId";
    status: "status";
    subtotalAmount: "subtotalAmount";
    discountAmount: "discountAmount";
    totalAmount: "totalAmount";
    couponCode: "couponCode";
    deliveryMessage: "deliveryMessage";
    deliveryData: "deliveryData";
    updatedAt: "updatedAt";
}>;
export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;
//# sourceMappingURL=OrderScalarFieldEnum.schema.d.ts.map