import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const DiscountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedCreateInput>;
export declare const DiscountUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutDiscountInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductUncheckedCreateNestedManyWithoutDiscountInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountUncheckedCreateInput.schema.d.ts.map