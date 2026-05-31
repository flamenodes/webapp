import * as z from 'zod';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './ProductFeatureWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional()
}).strict();
export const ProductFeatureListRelationFilterObjectSchema = makeSchema();
export const ProductFeatureListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureListRelationFilter.schema.js.map