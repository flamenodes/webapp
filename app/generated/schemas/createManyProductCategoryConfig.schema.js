import * as z from 'zod';
import { ProductCategoryConfigCreateManyInputObjectSchema as ProductCategoryConfigCreateManyInputObjectSchema } from './objects/ProductCategoryConfigCreateManyInput.schema';
export const ProductCategoryConfigCreateManySchema = z.object({ data: z.union([ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ProductCategoryConfigCreateManyZodSchema = z.object({ data: z.union([ProductCategoryConfigCreateManyInputObjectSchema, z.array(ProductCategoryConfigCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyProductCategoryConfig.schema.js.map