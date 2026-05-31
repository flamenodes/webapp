import * as z from 'zod';
export declare const AccountFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    accessToken: z.ZodOptional<z.ZodString>;
    refreshToken: z.ZodOptional<z.ZodString>;
    idToken: z.ZodOptional<z.ZodString>;
    accessTokenExpiresAt: z.ZodOptional<z.ZodDate>;
    refreshTokenExpiresAt: z.ZodOptional<z.ZodDate>;
    scope: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=AccountFindFirstResult.schema.d.ts.map