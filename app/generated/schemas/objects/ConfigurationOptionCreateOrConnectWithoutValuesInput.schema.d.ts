import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateOrConnectWithoutValuesInput>;
export declare const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionCreateOrConnectWithoutValuesInput.schema.d.ts.map