import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountCreateInputObjectSchema: z.ZodType<Prisma.DiscountCreateInput>;
export declare const DiscountCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedManyWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedManyWithoutDiscountInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCreateInput.schema.d.ts.map