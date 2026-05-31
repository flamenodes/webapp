import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemCreateOneSchema: z.ZodType<Prisma.CartItemCreateArgs>;
export declare const CartItemCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateInput, unknown>>, z.ZodType<Prisma.CartItemUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneCartItem.schema.d.ts.map