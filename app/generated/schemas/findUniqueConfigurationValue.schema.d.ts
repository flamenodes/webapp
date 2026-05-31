import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueFindUniqueSchema: z.ZodType<Prisma.ConfigurationValueFindUniqueArgs>;
export declare const ConfigurationValueFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueConfigurationValue.schema.d.ts.map