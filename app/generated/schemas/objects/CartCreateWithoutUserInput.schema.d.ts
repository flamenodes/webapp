import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutUserInput>;
export declare const CartCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemCreateNestedManyWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateNestedManyWithoutCartInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateWithoutUserInput.schema.d.ts.map