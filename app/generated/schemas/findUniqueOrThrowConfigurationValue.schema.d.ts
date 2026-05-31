import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationValueFindUniqueOrThrowSchema: z.ZodType<Prisma.ConfigurationValueFindUniqueOrThrowArgs>;
export declare const ConfigurationValueFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ConfigurationValueWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowConfigurationValue.schema.d.ts.map