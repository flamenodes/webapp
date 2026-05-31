import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountCreateOneSchema: z.ZodType<Prisma.DiscountCreateArgs>;
export declare const DiscountCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateInput, unknown>>, z.ZodType<Prisma.DiscountUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneDiscount.schema.d.ts.map