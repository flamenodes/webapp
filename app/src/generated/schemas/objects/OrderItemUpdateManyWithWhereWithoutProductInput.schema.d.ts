import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductInput>;
export declare const OrderItemUpdateManyWithWhereWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateManyWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateManyWithWhereWithoutProductInput.schema.d.ts.map