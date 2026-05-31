import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './objects/ProductCategoryConfigSelect.schema';
import { ProductCategoryConfigCreateInputObjectSchema as ProductCategoryConfigCreateInputObjectSchema } from './objects/ProductCategoryConfigCreateInput.schema';
import { ProductCategoryConfigUncheckedCreateInputObjectSchema as ProductCategoryConfigUncheckedCreateInputObjectSchema } from './objects/ProductCategoryConfigUncheckedCreateInput.schema';
export const ProductCategoryConfigCreateOneSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: z.union([ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema]) }).strict();
export const ProductCategoryConfigCreateOneZodSchema = z.object({ select: ProductCategoryConfigSelectObjectSchema.optional(), data: z.union([ProductCategoryConfigCreateInputObjectSchema, ProductCategoryConfigUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneProductCategoryConfig.schema.js.map