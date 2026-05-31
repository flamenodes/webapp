import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductUpdateManySchema: z.ZodType<Prisma.ProductUpdateManyArgs>;
export declare const ProductUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.ProductUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyProduct.schema.d.ts.map