import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartItemUpdateOneSchema: z.ZodType<Prisma.CartItemUpdateArgs>;
export declare const CartItemUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateInput, unknown>>, z.ZodType<Prisma.CartItemUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneCartItem.schema.d.ts.map