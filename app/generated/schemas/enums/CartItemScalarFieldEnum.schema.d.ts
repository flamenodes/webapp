import * as z from 'zod';
export declare const CartItemScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    productId: "productId";
    cartId: "cartId";
    quantity: "quantity";
    billingPeriod: "billingPeriod";
    configuration: "configuration";
}>;
export type CartItemScalarFieldEnum = z.infer<typeof CartItemScalarFieldEnumSchema>;
//# sourceMappingURL=CartItemScalarFieldEnum.schema.d.ts.map