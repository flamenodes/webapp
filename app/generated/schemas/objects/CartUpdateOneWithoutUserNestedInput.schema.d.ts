import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CartUpdateOneWithoutUserNestedInput>;
export declare const CartUpdateOneWithoutUserNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutUserInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateOrConnectWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateOrConnectWithoutUserInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartUpsertWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpsertWithoutUserInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.CartWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateToOneWithWhereWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedUpdateWithoutUserInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUpdateOneWithoutUserNestedInput.schema.d.ts.map