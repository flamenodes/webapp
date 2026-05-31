import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const OrderItemCreateManySchema: z.ZodType<Prisma.OrderItemCreateManyArgs>;
export declare const OrderItemCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderItemCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyOrderItem.schema.d.ts.map