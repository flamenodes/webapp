import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ServerAggregateSchema: z.ZodType<Prisma.ServerAggregateArgs>;
export declare const ServerAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ServerOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ServerOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ServerWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ServerWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ServerWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ServerCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ServerMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ServerMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ServerAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ServerSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ServerSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateServer.schema.d.ts.map