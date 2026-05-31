import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionUpsertWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionUpsertWithoutValuesInput>;
export declare const ConfigurationOptionUpsertWithoutValuesInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUpdateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateWithoutValuesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUncheckedUpdateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedUpdateWithoutValuesInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionUpsertWithoutValuesInput.schema.d.ts.map