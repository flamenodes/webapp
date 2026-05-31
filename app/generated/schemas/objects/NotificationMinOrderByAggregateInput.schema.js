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
export const NotificationMinOrderByAggregateInputObjectSchema = makeSchema();
export const NotificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationMinOrderByAggregateInput.schema.js.map