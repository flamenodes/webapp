import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const SessionOrderByRelationAggregateInputObjectSchema = makeSchema();
export const SessionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionOrderByRelationAggregateInput.schema.js.map