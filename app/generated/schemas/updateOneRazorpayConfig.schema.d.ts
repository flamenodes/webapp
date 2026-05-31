import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigUpdateOneSchema: z.ZodType<Prisma.RazorpayConfigUpdateArgs>;
export declare const RazorpayConfigUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUpdateInput, unknown>>, z.ZodType<Prisma.RazorpayConfigUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.RazorpayConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneRazorpayConfig.schema.d.ts.map