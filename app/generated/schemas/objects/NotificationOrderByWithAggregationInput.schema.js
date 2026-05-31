import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationCountOrderByAggregateInputObjectSchema as NotificationCountOrderByAggregateInputObjectSchema } from './NotificationCountOrderByAggregateInput.schema';
import { NotificationMaxOrderByAggregateInputObjectSchema as NotificationMaxOrderByAggregateInputObjectSchema } from './NotificationMaxOrderByAggregateInput.schema';
import { NotificationMinOrderByAggregateInputObjectSchema as NotificationMinOrderByAggregateInputObjectSchema } from './NotificationMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    message: SortOrderSchema.optional(),
    read: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    _count: z.lazy(() => NotificationCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => NotificationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => NotificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithAggregationInputObjectSchema = makeSchema();
export const NotificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationOrderByWithAggregationInput.schema.js.map