import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateNestedOneWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemCreateNestedOneWithoutServerInput>;
export declare const OrderItemCreateNestedOneWithoutServerInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemCreateOrConnectWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateOrConnectWithoutServerInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateNestedOneWithoutServerInput.schema.d.ts.map