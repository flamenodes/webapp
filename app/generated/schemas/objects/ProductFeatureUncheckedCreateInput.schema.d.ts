import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductFeatureUncheckedCreateInput>;
export declare const ProductFeatureUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    label: z.ZodString;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureUncheckedCreateInput.schema.d.ts.map