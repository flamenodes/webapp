import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    ip: SortOrderSchema.optional(),
    location: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    port: SortOrderSchema.optional(),
    protocol: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    latency: SortOrderSchema.optional(),
    lastChecked: SortOrderSchema.optional(),
    cpu: SortOrderSchema.optional(),
    memory: SortOrderSchema.optional(),
    disk: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const StatusNodeMinOrderByAggregateInputObjectSchema = makeSchema();
export const StatusNodeMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeMinOrderByAggregateInput.schema.js.map