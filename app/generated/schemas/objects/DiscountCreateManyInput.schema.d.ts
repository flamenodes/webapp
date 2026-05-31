import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountCreateManyInputObjectSchema: z.ZodType<Prisma.DiscountCreateManyInput>;
export declare const DiscountCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    percentage: z.ZodNumber;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCreateManyInput.schema.d.ts.map