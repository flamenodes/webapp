import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutUserInput>;
export declare const OrderUpsertWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutUserInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedCreateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedCreateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpsertWithWhereUniqueWithoutUserInput.schema.d.ts.map