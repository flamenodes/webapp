import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderItemFindUniqueSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs>;
export declare const OrderItemFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrderItem.schema.d.ts.map