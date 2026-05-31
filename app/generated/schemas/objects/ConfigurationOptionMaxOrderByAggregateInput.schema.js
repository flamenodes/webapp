import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    required: SortOrderSchema.optional(),
    category: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionMaxOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionMaxOrderByAggregateInput.schema.js.map