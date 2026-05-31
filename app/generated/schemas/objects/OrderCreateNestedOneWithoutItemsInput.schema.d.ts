import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutItemsInput>;
export declare const OrderCreateNestedOneWithoutItemsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCreateOrConnectWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateOrConnectWithoutItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateNestedOneWithoutItemsInput.schema.d.ts.map