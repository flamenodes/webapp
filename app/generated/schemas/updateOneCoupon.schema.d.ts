import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CouponUpdateOneSchema: z.ZodType<Prisma.CouponUpdateArgs>;
export declare const CouponUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CouponUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUpdateInput, unknown>>, z.ZodType<Prisma.CouponUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneCoupon.schema.d.ts.map