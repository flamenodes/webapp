import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpsertWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithoutServerInput>;
export declare const OrderItemUpsertWithoutServerInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpsertWithoutServerInput.schema.d.ts.map