import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCreateOrConnectWithoutOptionInput>;
export declare const ConfigurationValueCreateOrConnectWithoutOptionInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCreateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateWithoutOptionInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedCreateWithoutOptionInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueCreateOrConnectWithoutOptionInput.schema.d.ts.map