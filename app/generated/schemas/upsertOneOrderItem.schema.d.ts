import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemUpsertOneSchema: z.ZodType<Prisma.OrderItemUpsertArgs>;
export declare const OrderItemUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateInput, unknown>>, z.ZodType<Prisma.OrderItemUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateInput, unknown>>, z.ZodType<Prisma.OrderItemUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneOrderItem.schema.d.ts.map