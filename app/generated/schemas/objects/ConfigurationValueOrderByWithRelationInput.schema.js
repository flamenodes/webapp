import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConfigurationOptionOrderByWithRelationInputObjectSchema as ConfigurationOptionOrderByWithRelationInputObjectSchema } from './ConfigurationOptionOrderByWithRelationInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    optionId: SortOrderSchema.optional(),
    label: SortOrderSchema.optional(),
    value: SortOrderSchema.optional(),
    description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    priceModifier: SortOrderSchema.optional(),
    metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    sortOrder: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    option: z.lazy(() => ConfigurationOptionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ConfigurationValueOrderByWithRelationInputObjectSchema = makeSchema();
export const ConfigurationValueOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueOrderByWithRelationInput.schema.js.map