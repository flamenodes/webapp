import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountAggregateInputType>;
export declare const AccountCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    accountId: z.ZodOptional<z.ZodLiteral<true>>;
    providerId: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    accessToken: z.ZodOptional<z.ZodLiteral<true>>;
    refreshToken: z.ZodOptional<z.ZodLiteral<true>>;
    idToken: z.ZodOptional<z.ZodLiteral<true>>;
    accessTokenExpiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    refreshTokenExpiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    scope: z.ZodOptional<z.ZodLiteral<true>>;
    password: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCountAggregateInput.schema.d.ts.map