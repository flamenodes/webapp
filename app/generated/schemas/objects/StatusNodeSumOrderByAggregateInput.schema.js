import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    port: SortOrderSchema.optional(),
    latency: SortOrderSchema.optional(),
    cpu: SortOrderSchema.optional(),
    memory: SortOrderSchema.optional(),
    disk: SortOrderSchema.optional()
}).strict();
export const StatusNodeSumOrderByAggregateInputObjectSchema = makeSchema();
export const StatusNodeSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeSumOrderByAggregateInput.schema.js.map