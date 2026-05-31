import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput>;
export declare const CartItemUpdateWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpdateWithWhereUniqueWithoutProductInput.schema.d.ts.map