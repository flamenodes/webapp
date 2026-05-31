import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderUpdateManySchema: z.ZodType<Prisma.OrderUpdateManyArgs>;
export declare const OrderUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.OrderUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyOrder.schema.d.ts.map