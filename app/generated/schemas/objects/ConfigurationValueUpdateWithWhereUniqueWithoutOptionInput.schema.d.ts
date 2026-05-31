import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput>;
export declare const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUpdateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateWithoutOptionInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUncheckedUpdateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedUpdateWithoutOptionInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput.schema.d.ts.map