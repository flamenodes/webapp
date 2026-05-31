import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput>;
export declare const CartUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUncheckedCreateWithoutUserInput.schema.d.ts.map