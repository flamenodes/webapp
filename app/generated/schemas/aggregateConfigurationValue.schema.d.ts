import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueAggregateSchema: z.ZodType<Prisma.ConfigurationValueAggregateArgs>;
export declare const ConfigurationValueAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationValueCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateConfigurationValue.schema.d.ts.map