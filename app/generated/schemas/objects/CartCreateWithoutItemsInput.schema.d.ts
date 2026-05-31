import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutItemsInput>;
export declare const CartCreateWithoutItemsInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutCartInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateWithoutItemsInput.schema.d.ts.map