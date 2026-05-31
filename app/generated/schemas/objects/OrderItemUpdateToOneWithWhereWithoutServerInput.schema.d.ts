import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpdateToOneWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutServerInput>;
export declare const OrderItemUpdateToOneWithWhereWithoutServerInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateToOneWithWhereWithoutServerInput.schema.d.ts.map