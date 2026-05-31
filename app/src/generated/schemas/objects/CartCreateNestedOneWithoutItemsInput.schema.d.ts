import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartCreateNestedOneWithoutItemsInput>;
export declare const CartCreateNestedOneWithoutItemsInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutItemsInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateOrConnectWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateOrConnectWithoutItemsInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateNestedOneWithoutItemsInput.schema.d.ts.map