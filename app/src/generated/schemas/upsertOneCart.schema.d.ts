import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartUpsertOneSchema: z.ZodType<Prisma.CartUpsertArgs>;
export declare const CartUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.CartCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateInput, unknown>>, z.ZodType<Prisma.CartUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.CartUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateInput, unknown>>, z.ZodType<Prisma.CartUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneCart.schema.d.ts.map