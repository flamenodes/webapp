import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationOptionAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionAvgOrderByAggregateInput.schema.js.map