import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    planName: SortOrderSchema.optional(),
    icon: SortOrderSchema.optional(),
    badge: SortOrderSchema.optional(),
    category: SortOrderSchema.optional(),
    price: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    featureCategory: SortOrderSchema.optional(),
    inStock: SortOrderSchema.optional(),
    discountId: SortOrderSchema.optional(),
    specs: SortOrderSchema.optional(),
    deployMode: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCountOrderByAggregateInputObjectSchema = makeSchema();
export const ProductCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductCountOrderByAggregateInput.schema.js.map