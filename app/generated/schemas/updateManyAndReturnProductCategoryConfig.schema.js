import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigUpdateManyMutationInputObjectSchema as ProductCategoryConfigUpdateManyMutationInputObjectSchema } from './objects/ProductCategoryConfigUpdateManyMutationInput.schema';
import { ProductCategoryConfigWhereInputObjectSchema as ProductCategoryConfigWhereInputObjectSchema } from './objects/ProductCategoryConfigWhereInput.schema';
export const ProductCategoryConfigUpdateManyAndReturnSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();
export const ProductCategoryConfigUpdateManyAndReturnZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: ProductCategoryConfigUpdateManyMutationInputObjectSchema, where: ProductCategoryConfigWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnProductCategoryConfig.schema.js.map