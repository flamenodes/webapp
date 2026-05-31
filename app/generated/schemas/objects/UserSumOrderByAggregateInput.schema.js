import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    pteroUserId: SortOrderSchema.optional()
}).strict();
export const UserSumOrderByAggregateInputObjectSchema = makeSchema();
export const UserSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserSumOrderByAggregateInput.schema.js.map