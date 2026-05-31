import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpdateOneRequiredWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutServerNestedInput>;
export declare const OrderItemUpdateOneRequiredWithoutServerNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateOrConnectWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateOrConnectWithoutServerInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemUpsertWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpsertWithoutServerInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateToOneWithWhereWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutServerInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateOneRequiredWithoutServerNestedInput.schema.d.ts.map