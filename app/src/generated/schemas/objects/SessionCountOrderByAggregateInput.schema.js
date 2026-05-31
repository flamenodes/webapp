import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    token: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    ipAddress: SortOrderSchema.optional(),
    userAgent: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    impersonatedBy: SortOrderSchema.optional()
}).strict();
export const SessionCountOrderByAggregateInputObjectSchema = makeSchema();
export const SessionCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionCountOrderByAggregateInput.schema.js.map