import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemCreateOneSchema: z.ZodType<Prisma.OrderItemCreateArgs>;
export declare const OrderItemCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateInput, unknown>>, z.ZodType<Prisma.OrderItemUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneOrderItem.schema.d.ts.map