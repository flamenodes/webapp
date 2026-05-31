import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemUpdateOneSchema: z.ZodType<Prisma.OrderItemUpdateArgs>;
export declare const OrderItemUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateInput, unknown>>, z.ZodType<Prisma.OrderItemUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneOrderItem.schema.d.ts.map