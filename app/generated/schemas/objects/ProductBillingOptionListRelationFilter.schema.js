import * as z from 'zod';
import { ProductBillingOptionWhereInputObjectSchema as ProductBillingOptionWhereInputObjectSchema } from './ProductBillingOptionWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductBillingOptionWhereInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionListRelationFilterObjectSchema = makeSchema();
export const ProductBillingOptionListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductBillingOptionListRelationFilter.schema.js.map