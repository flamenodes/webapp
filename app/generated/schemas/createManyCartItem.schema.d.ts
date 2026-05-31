import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemCreateManySchema: z.ZodType<Prisma.CartItemCreateManyArgs>;
export declare const CartItemCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyCartItem.schema.d.ts.map