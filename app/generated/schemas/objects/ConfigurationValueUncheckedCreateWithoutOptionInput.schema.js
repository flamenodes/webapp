import * as z from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
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
    updatedAt: z.coerce.date().optional()
}).strict();
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema = makeSchema();
export const ConfigurationValueUncheckedCreateWithoutOptionInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueUncheckedCreateWithoutOptionInput.schema.js.map