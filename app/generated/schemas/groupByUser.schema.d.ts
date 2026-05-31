import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserGroupBySchema: z.ZodType<Prisma.UserGroupByArgs>;
export declare const UserGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.UserOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.UserOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.UserScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.UserScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        id: "id";
        name: "name";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        clientId: "clientId";
        email: "email";
        emailVerified: "emailVerified";
        image: "image";
        role: "role";
        banned: "banned";
        banReason: "banReason";
        banExpires: "banExpires";
        username: "username";
        firstname: "firstname";
        lastname: "lastname";
        pteroUserId: "pteroUserId";
        address: "address";
        city: "city";
        zip: "zip";
        country: "country";
        displayUsername: "displayUsername";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.UserCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.UserMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.UserMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.UserAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.UserSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByUser.schema.d.ts.map