import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountIncludeObjectSchema: z.ZodType<Prisma.DiscountInclude>;
export declare const DiscountIncludeObjectZodSchema: z.ZodObject<{
    product: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.ProductFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ProductFindManyArgs<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.DiscountCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountCountOutputTypeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountInclude.schema.d.ts.map