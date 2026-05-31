import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const NotificationOrderByRelationAggregateInputObjectSchema = makeSchema();
export const NotificationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationOrderByRelationAggregateInput.schema.js.map