import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductCategoryFilterObjectSchema as NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';
const nestedenumproductcategorywithaggregatesfilterSchema = z.object({
    equals: ProductCategorySchema.optional(),
    in: ProductCategorySchema.array().optional(),
    notIn: ProductCategorySchema.array().optional(),
    not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional()
}).strict();
export const NestedEnumProductCategoryWithAggregatesFilterObjectSchema = nestedenumproductcategorywithaggregatesfilterSchema;
export const NestedEnumProductCategoryWithAggregatesFilterObjectZodSchema = nestedenumproductcategorywithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumProductCategoryWithAggregatesFilter.schema.js.map