import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
const productfeaturescalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductFeatureScalarWhereWithAggregatesInputObjectSchema = productfeaturescalarwherewithaggregatesinputSchema;
export const ProductFeatureScalarWhereWithAggregatesInputObjectZodSchema = productfeaturescalarwherewithaggregatesinputSchema;
//# sourceMappingURL=ProductFeatureScalarWhereWithAggregatesInput.schema.js.map