import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    port: SortOrderSchema.optional()
}).strict();
export const ServerAvgOrderByAggregateInputObjectSchema = makeSchema();
export const ServerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerAvgOrderByAggregateInput.schema.js.map