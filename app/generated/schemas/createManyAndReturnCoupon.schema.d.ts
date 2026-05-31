import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const CouponCreateManyAndReturnSchema: z.ZodType<Prisma.CouponCreateManyAndReturnArgs>;
export declare const CouponCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CouponCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnCoupon.schema.d.ts.map