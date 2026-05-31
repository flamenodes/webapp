import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountUpsertOneSchema: z.ZodType<Prisma.DiscountUpsertArgs>;
export declare const DiscountUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCreateInput, unknown>>, z.ZodType<Prisma.DiscountUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.DiscountUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateInput, unknown>>, z.ZodType<Prisma.DiscountUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneDiscount.schema.d.ts.map