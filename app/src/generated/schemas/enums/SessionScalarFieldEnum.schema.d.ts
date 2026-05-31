import * as z from 'zod';
export declare const SessionScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    userId: "userId";
    updatedAt: "updatedAt";
    expiresAt: "expiresAt";
    token: "token";
    ipAddress: "ipAddress";
    userAgent: "userAgent";
    impersonatedBy: "impersonatedBy";
}>;
export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;
//# sourceMappingURL=SessionScalarFieldEnum.schema.d.ts.map