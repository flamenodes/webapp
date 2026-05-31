import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    amount: SortOrderSchema.optional(),
    maxUses: SortOrderSchema.optional(),
    usedCount: SortOrderSchema.optional()
}).strict();
export const CouponSumOrderByAggregateInputObjectSchema = makeSchema();
export const CouponSumOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponSumOrderByAggregateInput.schema.js.map