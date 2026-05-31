import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartCreateOrConnectWithoutItemsInput>;
export declare const CartCreateOrConnectWithoutItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.CartWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CartWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CartCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartUncheckedCreateWithoutItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateOrConnectWithoutItemsInput.schema.d.ts.map