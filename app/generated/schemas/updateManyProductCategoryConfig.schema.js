import * as z from 'zod';
import { ProductCategoryConfigUpdateManyMutationInputObjectSchema as ProductCategoryConfigUpdateManyMutationInputObjectSchema } from './objects/ProductCategoryConfigUpdateManyMutationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';
export const ProductCategoryConfigUpdateManySchema = z.object({ data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();
export const ProductCategoryConfigUpdateManyZodSchema = z.object({ data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyProductCategoryConfig.schema.js.map