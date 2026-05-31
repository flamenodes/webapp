import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    message: SortOrderSchema.optional(),
    read: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithRelationInputObjectSchema = makeSchema();
export const NotificationOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationOrderByWithRelationInput.schema.js.map