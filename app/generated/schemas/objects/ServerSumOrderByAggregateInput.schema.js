import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    port: SortOrderSchema.optional()
}).strict();
export const ServerSumOrderByAggregateInputObjectSchema = makeSchema();
export const ServerSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerSumOrderByAggregateInput.schema.js.map