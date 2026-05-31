import * as z from 'zod';
export declare const AccountSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    accessToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    accessTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type AccountType = z.infer<typeof AccountSchema>;
//# sourceMappingURL=Account.schema.d.ts.map