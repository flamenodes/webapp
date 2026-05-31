import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUpsertWithoutUserInput>;
export declare const CartUpsertWithoutUserInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutUserInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpsertWithoutUserInput.schema.d.ts.map