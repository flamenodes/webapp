import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CartCreateManyAndReturnSchema: z.ZodType<Prisma.CartCreateManyAndReturnArgs>;
export declare const CartCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CartSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CartCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CartCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnCart.schema.d.ts.map