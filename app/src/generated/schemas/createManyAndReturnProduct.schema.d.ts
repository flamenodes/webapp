import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const ProductCreateManyAndReturnSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs>;
export declare const ProductCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ProductCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ProductCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnProduct.schema.d.ts.map