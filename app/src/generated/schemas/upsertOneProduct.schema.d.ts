import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductUpsertOneSchema: z.ZodType<Prisma.ProductUpsertArgs>;
export declare const ProductUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ProductWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateInput, unknown>>, z.ZodType<Prisma.ProductUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ProductUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateInput, unknown>>, z.ZodType<Prisma.ProductUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneProduct.schema.d.ts.map