import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueFindManySelectSchema: z.ZodType<Prisma.ConfigurationValueSelect>;
export declare const ConfigurationValueFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    optionId: z.ZodOptional<z.ZodBoolean>;
    option: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    priceModifier: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ConfigurationValueFindManySchema: z.ZodType<Prisma.ConfigurationValueFindManyArgs>;
export declare const ConfigurationValueFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationValueOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodArray<z.ZodEnum<{
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
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyConfigurationValue.schema.d.ts.map