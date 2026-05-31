import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const DiscountFindUniqueOrThrowSchema: z.ZodType<Prisma.DiscountFindUniqueOrThrowArgs>;
export declare const DiscountFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowDiscount.schema.d.ts.map