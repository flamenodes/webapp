import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountArgsObjectSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
export declare const DiscountArgsObjectZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountArgs.schema.d.ts.map