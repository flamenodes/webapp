import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCreateManyInputObjectSchema: z.ZodType<Prisma.CartCreateManyInput>;
export declare const CartCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    couponCode: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCreateManyInput.schema.d.ts.map