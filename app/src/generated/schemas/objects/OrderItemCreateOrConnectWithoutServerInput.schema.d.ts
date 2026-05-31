import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutServerInput>;
export declare const OrderItemCreateOrConnectWithoutServerInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutServerInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutServerInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateOrConnectWithoutServerInput.schema.d.ts.map