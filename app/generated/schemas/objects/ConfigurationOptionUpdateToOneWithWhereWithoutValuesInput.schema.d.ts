import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionUpdateToOneWithWhereWithoutValuesInput>;
export declare const ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUpdateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateWithoutValuesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUncheckedUpdateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedUpdateWithoutValuesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionUpdateToOneWithWhereWithoutValuesInput.schema.d.ts.map