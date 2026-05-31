import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionUpsertOneSchema: z.ZodType<Prisma.ConfigurationOptionUpsertArgs>;
export declare const ConfigurationOptionUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateInput, unknown>>, z.ZodType<Prisma.ConfigurationOptionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUpdateInput, unknown>>, z.ZodType<Prisma.ConfigurationOptionUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneConfigurationOption.schema.d.ts.map