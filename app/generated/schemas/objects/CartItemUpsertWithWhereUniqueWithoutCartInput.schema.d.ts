import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutCartInput>;
export declare const CartItemUpsertWithWhereUniqueWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateWithoutCartInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpsertWithWhereUniqueWithoutCartInput.schema.d.ts.map