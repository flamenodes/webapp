import * as z from 'zod';
export declare const AccountInputSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    accessToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    idToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    scope: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type AccountInputType = z.infer<typeof AccountInputSchema>;
//# sourceMappingURL=Account.input.d.ts.map