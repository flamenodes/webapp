import * as z from 'zod';
export declare const AccountModelSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    accessToken: z.ZodNullable<z.ZodString>;
    refreshToken: z.ZodNullable<z.ZodString>;
    idToken: z.ZodNullable<z.ZodString>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodDate>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodDate>;
    scope: z.ZodNullable<z.ZodString>;
    password: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type AccountPureType = z.infer<typeof AccountModelSchema>;
//# sourceMappingURL=Account.pure.d.ts.map