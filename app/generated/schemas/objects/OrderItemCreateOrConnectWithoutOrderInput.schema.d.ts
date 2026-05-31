import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemCreateOrConnectWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput>;
export declare const OrderItemCreateOrConnectWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedCreateWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemCreateOrConnectWithoutOrderInput.schema.d.ts.map