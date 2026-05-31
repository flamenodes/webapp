import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueCountSchema: z.ZodType<Prisma.ConfigurationValueCountArgs>;
export declare const ConfigurationValueCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ConfigurationValueCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countConfigurationValue.schema.d.ts.map