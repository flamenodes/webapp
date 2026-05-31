import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationOptionCountOrderByAggregateInputObjectSchema as ConfigurationOptionCountOrderByAggregateInputObjectSchema } from './ConfigurationOptionCountOrderByAggregateInput.schema';
import { ConfigurationOptionAvgOrderByAggregateInputObjectSchema as ConfigurationOptionAvgOrderByAggregateInputObjectSchema } from './ConfigurationOptionAvgOrderByAggregateInput.schema';
import { ConfigurationOptionMaxOrderByAggregateInputObjectSchema as ConfigurationOptionMaxOrderByAggregateInputObjectSchema } from './ConfigurationOptionMaxOrderByAggregateInput.schema';
import { ConfigurationOptionMinOrderByAggregateInputObjectSchema as ConfigurationOptionMinOrderByAggregateInputObjectSchema } from './ConfigurationOptionMinOrderByAggregateInput.schema';
import { ConfigurationOptionSumOrderByAggregateInputObjectSchema as ConfigurationOptionSumOrderByAggregateInputObjectSchema } from './ConfigurationOptionSumOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    type: SortOrderSchema.optional(),
    required: SortOrderSchema.optional(),
    category: SortOrderSchema.optional(),
    sortOrder: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z.lazy(() => ConfigurationOptionCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ConfigurationOptionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ConfigurationOptionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ConfigurationOptionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ConfigurationOptionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionOrderByWithAggregationInputObjectSchema = makeSchema();
export const ConfigurationOptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionOrderByWithAggregationInput.schema.js.map