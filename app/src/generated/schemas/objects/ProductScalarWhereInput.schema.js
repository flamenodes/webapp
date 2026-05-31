import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
const productscalarwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ProductScalarWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    planName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    icon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    badge: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
    price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    featureCategory: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    inStock: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    discountId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    specs: z.lazy(() => JsonFilterObjectSchema).optional(),
    deployMode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time")]).optional()
}).strict();
export const ProductScalarWhereInputObjectSchema = productscalarwhereinputSchema;
export const ProductScalarWhereInputObjectZodSchema = productscalarwhereinputSchema;
//# sourceMappingURL=ProductScalarWhereInput.schema.js.map