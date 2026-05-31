import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutUserInput>;
export declare const CartUpdateToOneWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateToOneWithWhereWithoutUserInput.schema.d.ts.map