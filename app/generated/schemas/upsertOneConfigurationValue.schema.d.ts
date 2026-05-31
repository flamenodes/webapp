import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueUpsertOneSchema: z.ZodType<Prisma.ConfigurationValueUpsertArgs>;
export declare const ConfigurationValueUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateInput, unknown>>, z.ZodType<Prisma.ConfigurationValueUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateInput, unknown>>, z.ZodType<Prisma.ConfigurationValueUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneConfigurationValue.schema.d.ts.map