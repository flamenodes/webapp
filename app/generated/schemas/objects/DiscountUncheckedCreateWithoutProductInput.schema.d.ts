import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedCreateWithoutProductInput>;
export declare const DiscountUncheckedCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    percentage: z.ZodNumber;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUncheckedCreateWithoutProductInput.schema.d.ts.map