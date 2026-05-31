import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUpdateOneRequiredWithoutItemsNestedInputObjectSchema: z.ZodType<Prisma.CartUpdateOneRequiredWithoutItemsNestedInput>;
export declare const CartUpdateOneRequiredWithoutItemsNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateOrConnectWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateOrConnectWithoutItemsInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartUpsertWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpsertWithoutItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateToOneWithWhereWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutItemsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateOneRequiredWithoutItemsNestedInput.schema.d.ts.map