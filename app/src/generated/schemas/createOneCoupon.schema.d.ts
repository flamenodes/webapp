import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponCreateOneSchema: z.ZodType<Prisma.CouponCreateArgs>;
export declare const CouponCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CouponCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateInput, unknown>>, z.ZodType<Prisma.CouponUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneCoupon.schema.d.ts.map