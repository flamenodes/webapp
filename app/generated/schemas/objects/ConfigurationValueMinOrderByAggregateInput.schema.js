import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    optionId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    value: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    priceModifier: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueMinOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueMinOrderByAggregateInput.schema.js.map