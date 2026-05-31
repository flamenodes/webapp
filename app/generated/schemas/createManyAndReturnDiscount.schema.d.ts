import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const DiscountCreateManyAndReturnSchema: z.ZodType<Prisma.DiscountCreateManyAndReturnArgs>;
export declare const DiscountCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnDiscount.schema.d.ts.map