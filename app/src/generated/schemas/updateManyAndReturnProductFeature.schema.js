import * as z from 'zod';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './objects/ProductFeatureSelect.schema';
import { ProductFeatureUpdateManyMutationInputObjectSchema as ProductFeatureUpdateManyMutationInputObjectSchema } from './objects/ProductFeatureUpdateManyMutationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
export const ProductFeatureUpdateManyAndReturnSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
export const ProductFeatureUpdateManyAndReturnZodSchema = z.object({ select: ProductFeatureSelectObjectSchema.optional(), data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnProductFeature.schema.js.map