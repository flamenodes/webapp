import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigCreateOneSchema: z.ZodType<Prisma.RazorpayConfigCreateArgs>;
export declare const RazorpayConfigCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateInput, unknown>>, z.ZodType<Prisma.RazorpayConfigUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneRazorpayConfig.schema.d.ts.map