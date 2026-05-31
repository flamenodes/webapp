import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionCountSchema: z.ZodType<Prisma.ConfigurationOptionCountArgs>;
export declare const ConfigurationOptionCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationOptionCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countConfigurationOption.schema.d.ts.map