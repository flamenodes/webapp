import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionArgsObjectSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
export declare const ProductBillingOptionArgsObjectZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionArgs.schema.d.ts.map