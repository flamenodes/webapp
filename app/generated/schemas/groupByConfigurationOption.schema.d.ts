import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionGroupBySchema: z.ZodType<Prisma.ConfigurationOptionGroupByArgs>;
export declare const ConfigurationOptionGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        type: "type";
        id: "id";
        description: "description";
        name: "name";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        label: "label";
        sortOrder: "sortOrder";
        category: "category";
        required: "required";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByConfigurationOption.schema.d.ts.map