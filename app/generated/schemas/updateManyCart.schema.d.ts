import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CartUpdateManySchema: z.ZodType<Prisma.CartUpdateManyArgs>;
export declare const CartUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.CartUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyCart.schema.d.ts.map