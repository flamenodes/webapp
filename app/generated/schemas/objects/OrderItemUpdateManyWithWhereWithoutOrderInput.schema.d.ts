import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput>;
export declare const OrderItemUpdateManyWithWhereWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderItemScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderItemUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemUpdateManyWithWhereWithoutOrderInput.schema.d.ts.map