import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateInputObjectSchema: z.ZodType<Prisma.CartCreateInput>;
export declare const CartCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutCartInput, unknown>>>;
    items: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemCreateNestedManyWithoutCartInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemCreateNestedManyWithoutCartInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateInput.schema.d.ts.map