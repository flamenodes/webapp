import * as z from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema as ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateNestedOneWithoutValuesInput.schema';
import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    value: z.string(),
    description: z.string().optional().nullable(),
    priceModifier: z.number().int().optional(),
    metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    sortOrder: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
    option: z.lazy(() => ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema)
}).strict();
export const ConfigurationValueCreateInputObjectSchema = makeSchema();
export const ConfigurationValueCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueCreateInput.schema.js.map