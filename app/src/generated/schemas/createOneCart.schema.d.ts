import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartCreateOneSchema: z.ZodType<Prisma.CartCreateArgs>;
export declare const CartCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateInput, unknown>>, z.ZodType<Prisma.CartUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneCart.schema.d.ts.map