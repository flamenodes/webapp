import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderUpdateOneSchema: z.ZodType<Prisma.OrderUpdateArgs>;
export declare const OrderUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateInput, unknown>>, z.ZodType<Prisma.OrderUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneOrder.schema.d.ts.map