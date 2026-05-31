import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartUncheckedCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutItemsInput>;
export declare const CartUncheckedCreateWithoutItemsInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=CartUncheckedCreateWithoutItemsInput.schema.d.ts.map