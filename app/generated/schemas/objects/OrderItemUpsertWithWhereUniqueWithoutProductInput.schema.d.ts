import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput>;
export declare const OrderItemUpsertWithWhereUniqueWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutProductInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpsertWithWhereUniqueWithoutProductInput.schema.d.ts.map