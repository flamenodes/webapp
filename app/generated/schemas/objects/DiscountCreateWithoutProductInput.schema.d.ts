import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateWithoutProductInput>;
export declare const DiscountCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    percentage: z.ZodNumber;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCreateWithoutProductInput.schema.d.ts.map