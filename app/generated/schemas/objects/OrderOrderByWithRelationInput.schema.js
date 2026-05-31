import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { InvoiceOrderByWithRelationInputObjectSchema as InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    subtotalAmount: SortOrderSchema.optional(),
    discountAmount: SortOrderSchema.optional(),
    totalAmount: SortOrderSchema.optional(),
    couponCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    deliveryMessage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    deliveryData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    items: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
    invoice: z.lazy(() => InvoiceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithRelationInputObjectSchema = makeSchema();
export const OrderOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=OrderOrderByWithRelationInput.schema.js.map