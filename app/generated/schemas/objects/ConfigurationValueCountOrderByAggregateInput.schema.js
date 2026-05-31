import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    optionId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    value: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    priceModifier: SortOrderSchema.optional(),
    metadata: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueCountOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueCountOrderByAggregateInput.schema.js.map