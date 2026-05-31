import * as z from 'zod';
export declare const CouponScalarFieldEnumSchema: z.ZodEnum<{
    type: "type";
    code: "code";
    id: "id";
    description: "description";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    expiresAt: "expiresAt";
    amount: "amount";
    active: "active";
    maxUses: "maxUses";
    usedCount: "usedCount";
}>;
export type CouponScalarFieldEnum = z.infer<typeof CouponScalarFieldEnumSchema>;
//# sourceMappingURL=CouponScalarFieldEnum.schema.d.ts.map