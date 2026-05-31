import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderItemUpdateManySchema: z.ZodType<Prisma.OrderItemUpdateManyArgs>;
export declare const OrderItemUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.OrderItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyOrderItem.schema.d.ts.map