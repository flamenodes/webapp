import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueCreateOneSchema: z.ZodType<Prisma.ConfigurationValueCreateArgs>;
export declare const ConfigurationValueCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateInput, unknown>>, z.ZodType<Prisma.ConfigurationValueUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneConfigurationValue.schema.d.ts.map