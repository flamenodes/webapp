import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemUpsertOneSchema: z.ZodType<Prisma.CartItemUpsertArgs>;
export declare const CartItemUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateInput, unknown>>, z.ZodType<Prisma.CartItemUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.CartItemUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateInput, unknown>>, z.ZodType<Prisma.CartItemUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneCartItem.schema.d.ts.map