import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryFilterObjectSchema as NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema';
const makeSchema = () => z.object({
    equals: ProductCategorySchema.optional(),
    in: ProductCategorySchema.array().optional(),
    notIn: ProductCategorySchema.array().optional(),
    not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryFilterObjectSchema)]).optional()
}).strict();
export const EnumProductCategoryFilterObjectSchema = makeSchema();
export const EnumProductCategoryFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumProductCategoryFilter.schema.js.map