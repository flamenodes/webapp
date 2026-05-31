import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductInput>;
export declare const CartItemCreateOrConnectWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateOrConnectWithoutProductInput.schema.d.ts.map