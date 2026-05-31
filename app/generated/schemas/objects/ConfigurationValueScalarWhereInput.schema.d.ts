import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueScalarWhereInputObjectSchema: z.ZodType<Prisma.ConfigurationValueScalarWhereInput>;
export declare const ConfigurationValueScalarWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>>]>>;
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
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueScalarWhereInput.schema.d.ts.map