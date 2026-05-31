import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    orderItemId: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    ip: SortOrderSchema.optional(),
    port: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    resources: SortOrderSchema.optional(),
    pterodactylData: SortOrderSchema.optional(),
    suspended: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const ServerCountOrderByAggregateInputObjectSchema = makeSchema();
export const ServerCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerCountOrderByAggregateInput.schema.js.map