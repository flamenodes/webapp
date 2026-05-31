import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const ProductCreateManySchema: z.ZodType<Prisma.ProductCreateManyArgs>;
export declare const ProductCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyProduct.schema.d.ts.map