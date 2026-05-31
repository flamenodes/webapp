import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.CartCreateNestedOneWithoutUserInput>;
export declare const CartCreateNestedOneWithoutUserInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutUserInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCreateOrConnectWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateOrConnectWithoutUserInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateNestedOneWithoutUserInput.schema.d.ts.map