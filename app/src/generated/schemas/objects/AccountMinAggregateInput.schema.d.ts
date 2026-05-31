import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType>;
export declare const AccountMinAggregateInputObjectZodSchema: z.ZodObject<{
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
}, z.core.$strict>;
//# sourceMappingURL=AccountMinAggregateInput.schema.d.ts.map