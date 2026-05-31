import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderCreateOneSchema: z.ZodType<Prisma.OrderCreateArgs>;
export declare const OrderCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateInput, unknown>>, z.ZodType<Prisma.OrderUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneOrder.schema.d.ts.map