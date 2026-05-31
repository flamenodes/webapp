import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
export declare const OrderItemUpsertWithWhereUniqueWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutOrderInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpsertWithWhereUniqueWithoutOrderInput.schema.d.ts.map