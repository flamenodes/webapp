import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueUpdateManyWithWhereWithoutOptionInput>;
export declare const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ConfigurationValueScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUncheckedUpdateManyWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedUpdateManyWithoutOptionInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueUpdateManyWithWhereWithoutOptionInput.schema.d.ts.map