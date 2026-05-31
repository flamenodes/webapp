import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartItemCreateManyAndReturnSchema: z.ZodType<Prisma.CartItemCreateManyAndReturnArgs>;
export declare const CartItemCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnCartItem.schema.d.ts.map