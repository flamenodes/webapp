import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigFindUniqueOrThrowSchema: z.ZodType<Prisma.RazorpayConfigFindUniqueOrThrowArgs>;
export declare const RazorpayConfigFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.RazorpayConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowRazorpayConfig.schema.d.ts.map