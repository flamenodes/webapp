import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput>;
export declare const ConfigurationOptionScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumConfigurationOptionTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumConfigurationOptionTypeWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>]>>;
    required: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.BoolWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.BoolWithAggregatesFilter<never>, unknown>>>, z.ZodBoolean]>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumProductCategoryWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>]>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionScalarWhereWithAggregatesInput.schema.d.ts.map