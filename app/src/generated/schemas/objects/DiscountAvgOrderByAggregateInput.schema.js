import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    percentage: SortOrderSchema.optional()
}).strict();
export const DiscountAvgOrderByAggregateInputObjectSchema = makeSchema();
export const DiscountAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountAvgOrderByAggregateInput.schema.js.map