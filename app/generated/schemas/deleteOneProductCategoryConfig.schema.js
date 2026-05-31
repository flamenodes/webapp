import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigWhereUniqueInputObjectSchema as ProductCategoryConfigWhereUniqueInputObjectSchema } from './objects/ProductCategoryConfigWhereUniqueInput.schema';
export const ProductCategoryConfigDeleteOneSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();
export const ProductCategoryConfigDeleteOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), where: ProductCategoryConfigWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneProductCategoryConfig.schema.js.map