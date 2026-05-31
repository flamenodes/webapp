import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const OrderCreateManySchema: z.ZodType<Prisma.OrderCreateManyArgs>;
export declare const OrderCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.OrderCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.OrderCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyOrder.schema.d.ts.map