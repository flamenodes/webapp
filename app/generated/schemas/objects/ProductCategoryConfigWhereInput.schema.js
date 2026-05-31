import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumBillingPeriodNullableListFilterObjectSchema as EnumBillingPeriodNullableListFilterObjectSchema } from './EnumBillingPeriodNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
const productcategoryconfigwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductCategoryConfigWhereInputObjectSchema), z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductCategoryConfigWhereInputObjectSchema), z.lazy(() => ProductCategoryConfigWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
    billingPeriods: z.lazy(() => EnumBillingPeriodNullableListFilterObjectSchema).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProductCategoryConfigWhereInputObjectSchema = productcategoryconfigwhereinputSchema;
export const ProductCategoryConfigWhereInputObjectZodSchema = productcategoryconfigwhereinputSchema;
//# sourceMappingURL=ProductCategoryConfigWhereInput.schema.js.map