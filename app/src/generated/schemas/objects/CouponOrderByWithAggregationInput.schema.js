import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CouponCountOrderByAggregateInputObjectSchema as CouponCountOrderByAggregateInputObjectSchema } from './CouponCountOrderByAggregateInput.schema';
import { CouponAvgOrderByAggregateInputObjectSchema as CouponAvgOrderByAggregateInputObjectSchema } from './CouponAvgOrderByAggregateInput.schema';
import { CouponMaxOrderByAggregateInputObjectSchema as CouponMaxOrderByAggregateInputObjectSchema } from './CouponMaxOrderByAggregateInput.schema';
import { CouponMinOrderByAggregateInputObjectSchema as CouponMinOrderByAggregateInputObjectSchema } from './CouponMinOrderByAggregateInput.schema';
import { CouponSumOrderByAggregateInputObjectSchema as CouponSumOrderByAggregateInputObjectSchema } from './CouponSumOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    code: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    amount: SortOrderSchema.optional(),
    description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    active: SortOrderSchema.optional(),
    expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    maxUses: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    usedCount: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => CouponCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => CouponAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CouponMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CouponMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CouponSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CouponOrderByWithAggregationInputObjectSchema = makeSchema();
export const CouponOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponOrderByWithAggregationInput.schema.js.map