import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    subtotalAmount: SortOrderSchema.optional(),
    discountAmount: SortOrderSchema.optional(),
    totalAmount: SortOrderSchema.optional(),
    couponCode: SortOrderSchema.optional(),
    deliveryMessage: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const OrderMinOrderByAggregateInputObjectSchema = makeSchema();
export const OrderMinOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderMinOrderByAggregateInput.schema.js.map