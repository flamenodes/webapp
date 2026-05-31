import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderItemUpdateManyAndReturnSchema: z.ZodType<Prisma.OrderItemUpdateManyAndReturnArgs>;
export declare const OrderItemUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.OrderItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnOrderItem.schema.d.ts.map