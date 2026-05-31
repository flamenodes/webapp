import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect>;
export declare const AccountSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    accountId: z.ZodOptional<z.ZodBoolean>;
    providerId: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.UserInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    accessToken: z.ZodOptional<z.ZodBoolean>;
    refreshToken: z.ZodOptional<z.ZodBoolean>;
    idToken: z.ZodOptional<z.ZodBoolean>;
    accessTokenExpiresAt: z.ZodOptional<z.ZodBoolean>;
    refreshTokenExpiresAt: z.ZodOptional<z.ZodBoolean>;
    scope: z.ZodOptional<z.ZodBoolean>;
    password: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=AccountSelect.schema.d.ts.map