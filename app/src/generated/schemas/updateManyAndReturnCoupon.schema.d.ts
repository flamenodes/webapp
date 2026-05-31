import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponUpdateManyAndReturnSchema: z.ZodType<Prisma.CouponUpdateManyAndReturnArgs>;
export declare const CouponUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.CouponUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnCoupon.schema.d.ts.map