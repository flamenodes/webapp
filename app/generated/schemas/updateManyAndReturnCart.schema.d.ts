import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartUpdateManyAndReturnSchema: z.ZodType<Prisma.CartUpdateManyAndReturnArgs>;
export declare const CartUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.CartUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnCart.schema.d.ts.map