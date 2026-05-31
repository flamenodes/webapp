import * as z from 'zod';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
export const ProductFeatureDeleteManySchema = z.object({ where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
export const ProductFeatureDeleteManyZodSchema = z.object({ where: ProductFeatureWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyProductFeature.schema.js.map