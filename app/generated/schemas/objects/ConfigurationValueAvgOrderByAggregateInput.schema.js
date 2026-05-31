import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    priceModifier: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional()
}).strict();
export const ConfigurationValueAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueAvgOrderByAggregateInput.schema.js.map