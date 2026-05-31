import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    percentage: SortOrderSchema.optional(),
    product: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DiscountOrderByWithRelationInputObjectSchema = makeSchema();
export const DiscountOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountOrderByWithRelationInput.schema.js.map