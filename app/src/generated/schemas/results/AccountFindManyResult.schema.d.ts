import * as z from 'zod';
export declare const AccountFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accountId: z.ZodString;
        providerId: z.ZodString;
        userId: z.ZodString;
        user: z.ZodAny;
        accessToken: z.ZodOptional<z.ZodString>;
        refreshToken: z.ZodOptional<z.ZodString>;
        idToken: z.ZodOptional<z.ZodString>;
        accessTokenExpiresAt: z.ZodOptional<z.ZodString>;
        refreshTokenExpiresAt: z.ZodOptional<z.ZodString>;
        scope: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=AccountFindManyResult.schema.d.ts.map