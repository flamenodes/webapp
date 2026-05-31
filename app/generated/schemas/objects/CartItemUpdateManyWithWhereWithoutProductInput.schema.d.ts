import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductInput>;
export declare const CartItemUpdateManyWithWhereWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateManyWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpdateManyWithWhereWithoutProductInput.schema.d.ts.map