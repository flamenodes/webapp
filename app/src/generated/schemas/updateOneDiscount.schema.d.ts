import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountUpdateOneSchema: z.ZodType<Prisma.DiscountUpdateArgs>;
export declare const DiscountUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateInput, unknown>>, z.ZodType<Prisma.DiscountUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneDiscount.schema.d.ts.map