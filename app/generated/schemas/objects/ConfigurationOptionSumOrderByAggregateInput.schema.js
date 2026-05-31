import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionSumOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionSumOrderByAggregateInput.schema.js.map