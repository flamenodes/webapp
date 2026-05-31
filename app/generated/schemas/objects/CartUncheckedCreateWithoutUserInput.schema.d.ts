import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput>;
export declare const CartUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartUncheckedCreateWithoutUserInput.schema.d.ts.map