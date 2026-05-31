import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartUpsertWithoutItemsInput>;
export declare const CartUpsertWithoutItemsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutItemsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpsertWithoutItemsInput.schema.d.ts.map