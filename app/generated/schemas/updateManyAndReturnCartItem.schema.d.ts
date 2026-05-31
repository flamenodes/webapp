import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartItemUpdateManyAndReturnSchema: z.ZodType<Prisma.CartItemUpdateManyAndReturnArgs>;
export declare const CartItemUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.CartItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnCartItem.schema.d.ts.map