import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponCreateManySchema: z.ZodType<Prisma.CouponCreateManyArgs>;
export declare const CouponCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.CouponCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyCoupon.schema.d.ts.map