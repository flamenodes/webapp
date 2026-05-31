import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutUserInput>;
export declare const OrderUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.OrderScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.OrderUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=OrderUpdateManyWithWhereWithoutUserInput.schema.d.ts.map