import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutUserInput>;
export declare const OrderUpdateWithWhereUniqueWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutUserInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateWithWhereUniqueWithoutUserInput.schema.d.ts.map