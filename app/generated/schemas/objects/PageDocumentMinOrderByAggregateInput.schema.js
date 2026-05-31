import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    slug: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const PageDocumentMinOrderByAggregateInputObjectSchema = makeSchema();
export const PageDocumentMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentMinOrderByAggregateInput.schema.js.map