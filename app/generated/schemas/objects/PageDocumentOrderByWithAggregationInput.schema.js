import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PageDocumentCountOrderByAggregateInputObjectSchema as PageDocumentCountOrderByAggregateInputObjectSchema } from './PageDocumentCountOrderByAggregateInput.schema';
import { PageDocumentMaxOrderByAggregateInputObjectSchema as PageDocumentMaxOrderByAggregateInputObjectSchema } from './PageDocumentMaxOrderByAggregateInput.schema';
import { PageDocumentMinOrderByAggregateInputObjectSchema as PageDocumentMinOrderByAggregateInputObjectSchema } from './PageDocumentMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    slug: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    description: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => PageDocumentCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PageDocumentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PageDocumentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PageDocumentOrderByWithAggregationInputObjectSchema = makeSchema();
export const PageDocumentOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentOrderByWithAggregationInput.schema.js.map