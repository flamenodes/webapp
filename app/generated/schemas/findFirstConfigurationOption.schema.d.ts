import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionFindFirstSelectSchema: z.ZodType<Prisma.ConfigurationOptionSelect>;
export declare const ConfigurationOptionFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
    required: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodBoolean>;
    values: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ConfigurationOptionFindFirstSchema: z.ZodType<Prisma.ConfigurationOptionFindFirstArgs>;
export declare const ConfigurationOptionFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodArray<z.ZodEnum<{
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
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstConfigurationOption.schema.d.ts.map