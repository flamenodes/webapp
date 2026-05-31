import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductUpdateOneSchema: z.ZodType<Prisma.ProductUpdateArgs>;
export declare const ProductUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateInput, unknown>>, z.ZodType<Prisma.ProductUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneProduct.schema.d.ts.map