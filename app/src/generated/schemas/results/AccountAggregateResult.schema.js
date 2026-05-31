import * as z from 'zod';
export const AccountAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        accountId: z.number(),
        providerId: z.number(),
        userId: z.number(),
        user: z.number(),
        accessToken: z.number(),
        refreshToken: z.number(),
        idToken: z.number(),
        accessTokenExpiresAt: z.number(),
        refreshTokenExpiresAt: z.number(),
        scope: z.number(),
        password: z.number(),
        createdAt: z.number(),
        updatedAt: z.number()
    }).optional(),
    _min: z.object({
        id: z.string().nullable(),
        accountId: z.string().nullable(),
        providerId: z.string().nullable(),
        userId: z.string().nullable(),
        accessToken: z.string().nullable(),
        refreshToken: z.string().nullable(),
        idToken: z.string().nullable(),
        accessTokenExpiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        refreshTokenExpiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        scope: z.string().nullable(),
        password: z.string().nullable(),
        createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.string().nullable(),
        accountId: z.string().nullable(),
        providerId: z.string().nullable(),
        userId: z.string().nullable(),
        accessToken: z.string().nullable(),
        refreshToken: z.string().nullable(),
        idToken: z.string().nullable(),
        accessTokenExpiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        refreshTokenExpiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        scope: z.string().nullable(),
        password: z.string().nullable(),
        createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
        updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable()
    }).nullable().optional() });
//# sourceMappingURL=AccountAggregateResult.schema.js.map