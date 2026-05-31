import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemUpdateManyWithWhereWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutCartInput>;
export declare const CartItemUpdateManyWithWhereWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateManyWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpdateManyWithWhereWithoutCartInput.schema.d.ts.map