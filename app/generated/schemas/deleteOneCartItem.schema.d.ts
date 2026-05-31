import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemDeleteOneSchema: z.ZodType<Prisma.CartItemDeleteArgs>;
export declare const CartItemDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOneCartItem.schema.d.ts.map