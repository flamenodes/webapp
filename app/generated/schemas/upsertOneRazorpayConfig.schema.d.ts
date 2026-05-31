import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const RazorpayConfigUpsertOneSchema: z.ZodType<Prisma.RazorpayConfigUpsertArgs>;
export declare const RazorpayConfigUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.RazorpayConfigWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigCreateInput, unknown>>, z.ZodType<Prisma.RazorpayConfigUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.RazorpayConfigUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUpdateInput, unknown>>, z.ZodType<Prisma.RazorpayConfigUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.RazorpayConfigUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneRazorpayConfig.schema.d.ts.map