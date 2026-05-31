import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigCreateManyAndReturnSchema: z.ZodType<Prisma.RazorpayConfigCreateManyAndReturnArgs>;
export declare const RazorpayConfigCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.RazorpayConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnRazorpayConfig.schema.d.ts.map