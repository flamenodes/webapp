import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationValueOrderByRelationAggregateInputObjectSchema as ConfigurationValueOrderByRelationAggregateInputObjectSchema } from './ConfigurationValueOrderByRelationAggregateInput.schema';
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
    values: z.lazy(() => ConfigurationValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionOrderByWithRelationInputObjectSchema = makeSchema();
export const ConfigurationOptionOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionOrderByWithRelationInput.schema.js.map