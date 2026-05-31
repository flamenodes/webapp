import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const ProductOrderByRelationAggregateInputObjectSchema = makeSchema();
export const ProductOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductOrderByRelationAggregateInput.schema.js.map