import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput>;
export declare const OrderUpdateToOneWithWhereWithoutItemsInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateWithoutItemsInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateWithoutItemsInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateToOneWithWhereWithoutItemsInput.schema.d.ts.map