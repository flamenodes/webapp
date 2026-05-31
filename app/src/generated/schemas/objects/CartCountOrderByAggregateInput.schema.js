import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    couponCode: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CartCountOrderByAggregateInputObjectSchema = makeSchema();
export const CartCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CartCountOrderByAggregateInput.schema.js.map