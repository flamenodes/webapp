import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput>;
export declare const OrderUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderCreateOrConnectWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateOrConnectWithoutItemsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderUpsertWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpsertWithoutItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateOneRequiredWithoutItemsNestedInput.schema.d.ts.map