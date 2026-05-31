import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs>;
export declare const ProductUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ProductUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnProduct.schema.d.ts.map