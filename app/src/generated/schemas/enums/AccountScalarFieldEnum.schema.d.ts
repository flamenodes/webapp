import * as z from 'zod';
export declare const AccountScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    userId: "userId";
    updatedAt: "updatedAt";
    accountId: "accountId";
    providerId: "providerId";
    accessToken: "accessToken";
    refreshToken: "refreshToken";
    idToken: "idToken";
    accessTokenExpiresAt: "accessTokenExpiresAt";
    refreshTokenExpiresAt: "refreshTokenExpiresAt";
    scope: "scope";
    password: "password";
}>;
export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;
//# sourceMappingURL=AccountScalarFieldEnum.schema.d.ts.map