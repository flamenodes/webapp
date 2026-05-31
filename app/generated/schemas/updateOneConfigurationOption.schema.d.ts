import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionUpdateOneSchema: z.ZodType<Prisma.ConfigurationOptionUpdateArgs>;
export declare const ConfigurationOptionUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateInput, unknown>>, z.ZodType<Prisma.ConfigurationOptionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneConfigurationOption.schema.d.ts.map