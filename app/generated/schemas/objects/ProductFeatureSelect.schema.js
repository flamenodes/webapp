import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    label: z.boolean().optional(),
    sortOrder: z.boolean().optional()
}).strict();
export const ProductFeatureSelectObjectSchema = makeSchema();
export const ProductFeatureSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureSelect.schema.js.map