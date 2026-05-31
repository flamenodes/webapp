import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemCreateManyAndReturnSchema: z.ZodType<Prisma.OrderItemCreateManyAndReturnArgs>;
export declare const OrderItemCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnOrderItem.schema.d.ts.map