import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    _count: SortOrderSchema.optional()
}).strict();
export const CartItemOrderByRelationAggregateInputObjectSchema = makeSchema();
export const CartItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartItemOrderByRelationAggregateInput.schema.js.map