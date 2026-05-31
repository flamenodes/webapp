import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderUpdateManyAndReturnSchema: z.ZodType<Prisma.OrderUpdateManyAndReturnArgs>;
export declare const OrderUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.OrderUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnOrder.schema.d.ts.map