import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
const configurationvaluescalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => ConfigurationValueScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConfigurationValueScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ConfigurationValueScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ConfigurationValueScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ConfigurationValueScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    optionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
    priceModifier: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
    metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
    sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ConfigurationValueScalarWhereWithAggregatesInputObjectSchema = configurationvaluescalarwherewithaggregatesinputSchema;
export const ConfigurationValueScalarWhereWithAggregatesInputObjectZodSchema = configurationvaluescalarwherewithaggregatesinputSchema;
//# sourceMappingURL=ConfigurationValueScalarWhereWithAggregatesInput.schema.js.map