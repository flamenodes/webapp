import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueUpdateOneSchema: z.ZodType<Prisma.ConfigurationValueUpdateArgs>;
export declare const ConfigurationValueUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ConfigurationValueUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUpdateInput, unknown>>, z.ZodType<Prisma.ConfigurationValueUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneConfigurationValue.schema.d.ts.map