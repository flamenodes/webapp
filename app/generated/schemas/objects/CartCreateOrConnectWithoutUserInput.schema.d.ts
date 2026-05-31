import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CartCreateOrConnectWithoutUserInput>;
export declare const CartCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateOrConnectWithoutUserInput.schema.d.ts.map