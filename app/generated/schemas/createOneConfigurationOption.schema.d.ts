import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionCreateOneSchema: z.ZodType<Prisma.ConfigurationOptionCreateArgs>;
export declare const ConfigurationOptionCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationOptionCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionCreateInput, unknown>>, z.ZodType<Prisma.ConfigurationOptionUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneConfigurationOption.schema.d.ts.map