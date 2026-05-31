import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureCreateManyInputObjectSchema as ProductFeatureCreateManyInputObjectSchema } from './objects/ProductFeatureCreateManyInput.schema';
export const ProductFeatureCreateManyAndReturnSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: z.union([ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductFeatureCreateManyAndReturnZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: z.union([ProductFeatureCreateManyInputObjectSchema, z.array(ProductFeatureCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnProductFeature.schema.js.map