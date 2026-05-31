import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureCreateManyProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyProductInput>;
export declare const ProductFeatureCreateManyProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateManyProductInput.schema.d.ts.map