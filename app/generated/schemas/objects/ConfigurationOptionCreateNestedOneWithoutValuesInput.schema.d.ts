import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateNestedOneWithoutValuesInput>;
export declare const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateWithoutValuesInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedCreateWithoutValuesInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionCreateOrConnectWithoutValuesInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateOrConnectWithoutValuesInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionCreateNestedOneWithoutValuesInput.schema.d.ts.map