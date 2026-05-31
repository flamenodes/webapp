import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemCreateOrConnectWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutCartInput>;
export declare const CartItemCreateOrConnectWithoutCartInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartItemCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateWithoutCartInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateWithoutCartInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateOrConnectWithoutCartInput.schema.d.ts.map