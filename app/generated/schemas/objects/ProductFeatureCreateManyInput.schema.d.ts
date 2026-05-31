import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureCreateManyInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateManyInput>;
export declare const ProductFeatureCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    productId: z.ZodString;
    label: z.ZodString;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateManyInput.schema.d.ts.map