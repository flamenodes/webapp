import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderUpsertOneSchema: z.ZodType<Prisma.OrderUpsertArgs>;
export declare const OrderUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.OrderCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateInput, unknown>>, z.ZodType<Prisma.OrderUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.OrderUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateInput, unknown>>, z.ZodType<Prisma.OrderUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneOrder.schema.d.ts.map