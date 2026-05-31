import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CouponUpsertOneSchema: z.ZodType<Prisma.CouponUpsertArgs>;
export declare const CouponUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.CouponCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateInput, unknown>>, z.ZodType<Prisma.CouponUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.CouponUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUpdateInput, unknown>>, z.ZodType<Prisma.CouponUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneCoupon.schema.d.ts.map