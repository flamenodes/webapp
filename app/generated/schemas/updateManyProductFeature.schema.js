import * as z from 'zod';
import { ProductFeatureUpdateManyMutationInputObjectSchema as ProductFeatureUpdateManyMutationInputObjectSchema } from './objects/ProductFeatureUpdateManyMutationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
export const ProductFeatureUpdateManySchema = z.object({ data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
export const ProductFeatureUpdateManyZodSchema = z.object({ data: ProductFeatureUpdateManyMutationInputObjectSchema, where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyProductFeature.schema.js.map