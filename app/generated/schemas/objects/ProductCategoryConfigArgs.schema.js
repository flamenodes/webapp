import * as z from 'zod';
import { ProductCategoryConfigSelectObjectSchema as ProductCategoryConfigSelectObjectSchema } from './ProductCategoryConfigSelect.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => ProductCategoryConfigSelectObjectSchema).optional()
}).strict();
export const ProductCategoryConfigArgsObjectSchema = makeSchema();
export const ProductCategoryConfigArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCategoryConfigArgs.schema.js.map