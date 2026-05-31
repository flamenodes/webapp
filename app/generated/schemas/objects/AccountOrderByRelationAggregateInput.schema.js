import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const AccountOrderByRelationAggregateInputObjectSchema = makeSchema();
export const AccountOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountOrderByRelationAggregateInput.schema.js.map