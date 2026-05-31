import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
export declare const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereUniqueInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateWithWhereUniqueWithoutOrderInput.schema.d.ts.map