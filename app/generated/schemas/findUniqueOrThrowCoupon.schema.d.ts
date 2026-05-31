import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CouponFindUniqueOrThrowSchema: z.ZodType<Prisma.CouponFindUniqueOrThrowArgs>;
export declare const CouponFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowCoupon.schema.d.ts.map