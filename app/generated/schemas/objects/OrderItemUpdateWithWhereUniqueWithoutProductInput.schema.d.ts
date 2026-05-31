import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput>;
export declare const OrderItemUpdateWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateWithWhereUniqueWithoutProductInput.schema.d.ts.map