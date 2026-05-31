import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigCreateManySchema: z.ZodType<Prisma.RazorpayConfigCreateManyArgs>;
export declare const RazorpayConfigCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.RazorpayConfigCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyRazorpayConfig.schema.d.ts.map