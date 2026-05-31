import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductFeatureCreateInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateInput>;
export declare const ProductFeatureCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutFeaturesInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutFeaturesInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductFeatureCreateInput.schema.d.ts.map