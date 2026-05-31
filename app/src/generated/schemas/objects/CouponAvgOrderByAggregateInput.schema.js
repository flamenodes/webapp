import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    amount: SortOrderSchema.optional(),
    maxUses: SortOrderSchema.optional(),
    usedCount: SortOrderSchema.optional()
}).strict();
export const CouponAvgOrderByAggregateInputObjectSchema = makeSchema();
export const CouponAvgOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponAvgOrderByAggregateInput.schema.js.map