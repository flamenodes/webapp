import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionIncludeObjectSchema: z.ZodType<Prisma.ProductBillingOptionInclude>;
export declare const ProductBillingOptionIncludeObjectZodSchema: z.ZodObject<{
    product: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionInclude.schema.d.ts.map