import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const AccountGroupBySchema: z.ZodType<Prisma.AccountGroupByArgs>;
export declare const AccountGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.AccountOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        accountId: "accountId";
        providerId: "providerId";
        accessToken: "accessToken";
        refreshToken: "refreshToken";
        idToken: "idToken";
        accessTokenExpiresAt: "accessTokenExpiresAt";
        refreshTokenExpiresAt: "refreshTokenExpiresAt";
        scope: "scope";
        password: "password";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.AccountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.AccountMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.AccountMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByAccount.schema.d.ts.map