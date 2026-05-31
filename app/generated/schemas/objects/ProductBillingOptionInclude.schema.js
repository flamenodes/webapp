import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ProductBillingOptionIncludeObjectSchema = makeSchema();
export const ProductBillingOptionIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionInclude.schema.js.map