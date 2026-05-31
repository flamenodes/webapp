import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const ProductFeatureOrderByRelationAggregateInputObjectSchema = makeSchema();
export const ProductFeatureOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ProductFeatureOrderByRelationAggregateInput.schema.js.map