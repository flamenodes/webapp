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
export const NotificationCountOrderByAggregateInputObjectSchema = makeSchema();
export const NotificationCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCountOrderByAggregateInput.schema.js.map