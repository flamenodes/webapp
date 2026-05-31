import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithoutItemsInput>;
export declare const OrderUpsertWithoutItemsInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpsertWithoutItemsInput.schema.d.ts.map