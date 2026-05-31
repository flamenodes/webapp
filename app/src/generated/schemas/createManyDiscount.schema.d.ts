import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountCreateManySchema: z.ZodType<Prisma.DiscountCreateManyArgs>;
export declare const DiscountCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyDiscount.schema.d.ts.map