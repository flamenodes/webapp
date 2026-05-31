import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    code: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    amount: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    active: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    maxUses: SortOrderSchema.optional(),
    usedCount: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CouponMaxOrderByAggregateInputObjectSchema = makeSchema();
export const CouponMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponMaxOrderByAggregateInput.schema.js.map