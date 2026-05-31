import * as z from 'zod';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateNestedManyWithoutProductInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateNestedManyWithoutProductInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    planName: z.string(),
    icon: z.string().optional().nullable(),
    badge: z.string().optional().nullable(),
    category: ProductCategorySchema,
    price: z.number().int(),
    sortOrder: z.number().int().optional(),
    featureCategory: z.string().optional(),
    inStock: z.boolean().optional(),
    discountId: z.string().optional().nullable(),
    specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
    deployMode: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    features: z.lazy(() => ProductFeatureUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
    orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional(),
    billingOptions: z.lazy(() => ProductBillingOptionUncheckedCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductUncheckedCreateWithoutCartItemsInputObjectSchema = makeSchema();
export const ProductUncheckedCreateWithoutCartItemsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductUncheckedCreateWithoutCartItemsInput.schema.js.map