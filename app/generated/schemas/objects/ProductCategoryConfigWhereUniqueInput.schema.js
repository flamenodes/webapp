import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    category: ProductCategorySchema.optional()
}).strict();
export const ProductCategoryConfigWhereUniqueInputObjectSchema = makeSchema();
export const ProductCategoryConfigWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigWhereUniqueInput.schema.js.map