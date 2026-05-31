import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ProductFeatureIncludeObjectSchema = makeSchema();
export const ProductFeatureIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureInclude.schema.js.map