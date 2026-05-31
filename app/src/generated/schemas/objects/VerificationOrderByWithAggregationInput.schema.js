import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VerificationCountOrderByAggregateInputObjectSchema as VerificationCountOrderByAggregateInputObjectSchema } from './VerificationCountOrderByAggregateInput.schema';
import { VerificationMaxOrderByAggregateInputObjectSchema as VerificationMaxOrderByAggregateInputObjectSchema } from './VerificationMaxOrderByAggregateInput.schema';
import { VerificationMinOrderByAggregateInputObjectSchema as VerificationMinOrderByAggregateInputObjectSchema } from './VerificationMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    identifier: SortOrderSchema.optional(),
    value: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => VerificationCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VerificationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VerificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VerificationOrderByWithAggregationInputObjectSchema = makeSchema();
export const VerificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationOrderByWithAggregationInput.schema.js.map