import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ProductFeatureCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateWithoutProductInput>;
export declare const ProductFeatureCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateWithoutProductInput.schema.d.ts.map