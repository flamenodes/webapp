import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    priceModifier: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueSumOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueSumOrderByAggregateInput.schema.js.map