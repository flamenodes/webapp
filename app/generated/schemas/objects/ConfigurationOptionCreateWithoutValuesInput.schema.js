import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    label: z.string(),
    description: z.string().optional().nullable(),
    type: ConfigurationOptionTypeSchema.optional(),
    required: z.boolean().optional(),
    category: ProductCategorySchema,
    sortOrder: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const ConfigurationOptionCreateWithoutValuesInputObjectSchema = makeSchema();
export const ConfigurationOptionCreateWithoutValuesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionCreateWithoutValuesInput.schema.js.map