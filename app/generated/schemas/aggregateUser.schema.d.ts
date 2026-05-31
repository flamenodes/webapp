import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const UserAggregateSchema: z.ZodType<Prisma.UserAggregateArgs>;
export declare const UserAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.UserOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.UserOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.UserWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.UserWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.UserWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.UserCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.UserMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.UserMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.UserAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.UserSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.UserSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateUser.schema.d.ts.map