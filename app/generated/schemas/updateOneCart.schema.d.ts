import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartUpdateOneSchema: z.ZodType<Prisma.CartUpdateArgs>;
export declare const CartUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateInput, unknown>>, z.ZodType<Prisma.CartUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneCart.schema.d.ts.map