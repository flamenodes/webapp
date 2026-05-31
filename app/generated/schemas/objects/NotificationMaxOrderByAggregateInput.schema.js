import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    message: SortOrderSchema.optional(),
    read: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const NotificationMaxOrderByAggregateInputObjectSchema = makeSchema();
export const NotificationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationMaxOrderByAggregateInput.schema.js.map