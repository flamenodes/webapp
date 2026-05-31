import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ConfigurationOptionFindUniqueOrThrowSchema: z.ZodType<Prisma.ConfigurationOptionFindUniqueOrThrowArgs>;
export declare const ConfigurationOptionFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ConfigurationOptionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowConfigurationOption.schema.d.ts.map