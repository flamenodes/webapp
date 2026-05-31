import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutCartInput>;
export declare const CartItemUpdateWithWhereUniqueWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpdateWithWhereUniqueWithoutCartInput.schema.d.ts.map