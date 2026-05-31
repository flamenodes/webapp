import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateNestedOneWithoutUserInput>;
export declare const CartUncheckedCreateNestedOneWithoutUserInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutUserInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateOrConnectWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateOrConnectWithoutUserInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUncheckedCreateNestedOneWithoutUserInput.schema.d.ts.map