import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    identifier: SortOrderSchema.optional(),
    value: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const VerificationMinOrderByAggregateInputObjectSchema = makeSchema();
export const VerificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationMinOrderByAggregateInput.schema.js.map