import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumOrderStatusFilterObjectSchema as NestedEnumOrderStatusFilterObjectSchema } from './NestedEnumOrderStatusFilter.schema';
const nestedenumorderstatuswithaggregatesfilterSchema = z.object({
    equals: OrderStatusSchema.optional(),
    in: OrderStatusSchema.array().optional(),
    notIn: OrderStatusSchema.array().optional(),
    not: z.union([OrderStatusSchema, z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumOrderStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumOrderStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumOrderStatusWithAggregatesFilterObjectSchema = nestedenumorderstatuswithaggregatesfilterSchema;
export const NestedEnumOrderStatusWithAggregatesFilterObjectZodSchema = nestedenumorderstatuswithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumOrderStatusWithAggregatesFilter.schema.js.map