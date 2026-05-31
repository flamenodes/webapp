import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueGroupBySchema: z.ZodType<Prisma.ConfigurationValueGroupByArgs>;
export declare const ConfigurationValueGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        value: "value";
        metadata: "metadata";
        id: "id";
        description: "description";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        label: "label";
        sortOrder: "sortOrder";
        optionId: "optionId";
        priceModifier: "priceModifier";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationValueCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByConfigurationValue.schema.d.ts.map