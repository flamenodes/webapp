import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderCreateManyAndReturnSchema: z.ZodType<Prisma.OrderCreateManyAndReturnArgs>;
export declare const OrderCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnOrder.schema.d.ts.map