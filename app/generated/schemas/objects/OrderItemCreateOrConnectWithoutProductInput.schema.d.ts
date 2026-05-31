import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput>;
export declare const OrderItemCreateOrConnectWithoutProductInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutProductInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutProductInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateOrConnectWithoutProductInput.schema.d.ts.map