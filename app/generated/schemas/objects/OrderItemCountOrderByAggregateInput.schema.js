import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    orderId: SortOrderSchema.optional(),
    productId: SortOrderSchema.optional(),
    productName: SortOrderSchema.optional(),
    quantity: SortOrderSchema.optional(),
    billingPeriod: SortOrderSchema.optional(),
    unitPrice: SortOrderSchema.optional(),
    totalPrice: SortOrderSchema.optional(),
    specsSnapshot: SortOrderSchema.optional(),
    configuration: SortOrderSchema.optional(),
    expiresAt: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional()
}).strict();
export const OrderItemCountOrderByAggregateInputObjectSchema = makeSchema();
export const OrderItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderItemCountOrderByAggregateInput.schema.js.map