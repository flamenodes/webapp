import * as z from 'zod';
import { ProductFeatureCreateManyInputObjectSchema as ProductFeatureCreateManyInputObjectSchema } from './objects/ProductFeatureCreateManyInput.schema';
export const ProductFeatureCreateManySchema = z.object({ data: z.union([ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductFeatureCreateManyZodSchema = z.object({ data: z.union([ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyProductFeature.schema.js.map