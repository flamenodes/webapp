import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpsertWithWhereUniqueWithoutOptionInput>;
export declare const ConfigurationValueUpsertWithWhereUniqueWithoutOptionInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUpdateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateWithoutOptionInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUncheckedUpdateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedUpdateWithoutOptionInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCreateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateWithoutOptionInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueUpsertWithWhereUniqueWithoutOptionInput.schema.d.ts.map