import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartItemUpdateManySchema: z.ZodType<Prisma.CartItemUpdateManyArgs>;
export declare const CartItemUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.CartItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyCartItem.schema.d.ts.map