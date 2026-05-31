import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueWhereInputObjectSchema: z.ZodType<Prisma.ConfigurationValueWhereInput>;
export declare const ConfigurationValueWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    optionId: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    priceModifier: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    metadata: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.JsonNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.JsonNullableFilter<never>, unknown>>>>;
    sortOrder: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    option: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueWhereInput.schema.d.ts.map