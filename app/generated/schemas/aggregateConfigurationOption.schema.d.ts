import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionAggregateSchema: z.ZodType<Prisma.ConfigurationOptionAggregateArgs>;
export declare const ConfigurationOptionAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateConfigurationOption.schema.d.ts.map