import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    pteroUserId: SortOrderSchema.optional()
}).strict();
export const UserAvgOrderByAggregateInputObjectSchema = makeSchema();
export const UserAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserAvgOrderByAggregateInput.schema.js.map