import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutItemsInput>;
export declare const OrderCreateOrConnectWithoutItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateOrConnectWithoutItemsInput.schema.d.ts.map