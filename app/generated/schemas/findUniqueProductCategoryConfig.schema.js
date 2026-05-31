import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';
export const ProductCategoryConfigFindUniqueSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();
export const ProductCategoryConfigFindUniqueZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueProductCategoryConfig.schema.js.map