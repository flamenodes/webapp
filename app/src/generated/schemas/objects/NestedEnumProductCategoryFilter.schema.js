import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
const nestedenumproductcategoryfilterSchema = z.object({
    equals: ProductCategorySchema.optional(),
    in: ProductCategorySchema.array().optional(),
    notIn: ProductCategorySchema.array().optional(),
    not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumProductCategoryFilterObjectSchema = nestedenumproductcategoryfilterSchema;
export const NestedEnumProductCategoryFilterObjectZodSchema = nestedenumproductcategoryfilterSchema;
//# sourceMappingURL=NestedEnumProductCategoryFilter.schema.js.map