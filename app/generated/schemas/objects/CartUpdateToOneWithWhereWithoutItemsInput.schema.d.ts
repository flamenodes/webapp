import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutItemsInput>;
export declare const CartUpdateToOneWithWhereWithoutItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateToOneWithWhereWithoutItemsInput.schema.d.ts.map