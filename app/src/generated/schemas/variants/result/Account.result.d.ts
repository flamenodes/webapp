import * as z from 'zod';
export declare const AccountResultSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    accessToken: z.ZodNullable<z.ZodString>;
    refreshToken: z.ZodNullable<z.ZodString>;
    idToken: z.ZodNullable<z.ZodString>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodString>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodString>;
    scope: z.ZodNullable<z.ZodString>;
    password: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type AccountResultType = z.infer<typeof AccountResultSchema>;
//# sourceMappingURL=Account.result.d.ts.map