import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumConfigurationOptionTypeFilterObjectSchema as NestedEnumConfigurationOptionTypeFilterObjectSchema } from './NestedEnumConfigurationOptionTypeFilter.schema';
const nestedenumconfigurationoptiontypewithaggregatesfilterSchema = z.object({
    equals: ConfigurationOptionTypeSchema.optional(),
    in: ConfigurationOptionTypeSchema.array().optional(),
    notIn: ConfigurationOptionTypeSchema.array().optional(),
    not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectSchema = nestedenumconfigurationoptiontypewithaggregatesfilterSchema;
export const NestedEnumConfigurationOptionTypeWithAggregatesFilterObjectZodSchema = nestedenumconfigurationoptiontypewithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumConfigurationOptionTypeWithAggregatesFilter.schema.js.map