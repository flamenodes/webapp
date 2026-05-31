import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumConfigurationOptionTypeWithAggregatesFilter>;
export declare const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumConfigurationOptionTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumConfigurationOptionTypeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumConfigurationOptionTypeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumConfigurationOptionTypeWithAggregatesFilter.schema.d.ts.map