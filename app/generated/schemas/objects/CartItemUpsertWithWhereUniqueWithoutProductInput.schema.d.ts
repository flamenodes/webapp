import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput>;
export declare const CartItemUpsertWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedUpdateWithoutProductInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUpsertWithWhereUniqueWithoutProductInput.schema.d.ts.map