import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.RazorpayConfigUpdateManyAndReturnArgs>;
export declare const RazorpayConfigUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.RazorpayConfigUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnRazorpayConfig.schema.d.ts.map