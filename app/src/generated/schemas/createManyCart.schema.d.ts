import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartCreateManySchema: z.ZodType<Prisma.CartCreateManyArgs>;
export declare const CartCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyCart.schema.d.ts.map