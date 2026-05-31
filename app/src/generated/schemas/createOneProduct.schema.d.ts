import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductCreateOneSchema: z.ZodType<Prisma.ProductCreateArgs>;
export declare const ProductCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateInput, unknown>>, z.ZodType<Prisma.ProductUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneProduct.schema.d.ts.map