import * as z from 'zod';
export declare const OrderItemScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    orderId: "orderId";
    createdAt: "createdAt";
    expiresAt: "expiresAt";
    productId: "productId";
    quantity: "quantity";
    billingPeriod: "billingPeriod";
    configuration: "configuration";
    productName: "productName";
    unitPrice: "unitPrice";
    totalPrice: "totalPrice";
    specsSnapshot: "specsSnapshot";
}>;
export type OrderItemScalarFieldEnum = z.infer<typeof OrderItemScalarFieldEnumSchema>;
//# sourceMappingURL=OrderItemScalarFieldEnum.schema.d.ts.map