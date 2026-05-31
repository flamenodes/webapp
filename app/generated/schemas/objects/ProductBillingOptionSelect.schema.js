import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
    billingPeriod: z.boolean().optional(),
    price: z.boolean().optional()
}).strict();
export const ProductBillingOptionSelectObjectSchema = makeSchema();
export const ProductBillingOptionSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionSelect.schema.js.map