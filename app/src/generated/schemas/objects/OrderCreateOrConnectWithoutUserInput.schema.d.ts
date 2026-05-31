import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutUserInput>;
export declare const OrderCreateOrConnectWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderCreateOrConnectWithoutUserInput.schema.d.ts.map