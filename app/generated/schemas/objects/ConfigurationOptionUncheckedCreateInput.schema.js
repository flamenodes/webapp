import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ConfigurationValueUncheckedCreateNestedManyWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateNestedManyWithoutOptionInput.schema';
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
    values: z.lazy(() => ConfigurationValueUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionUncheckedCreateInputObjectSchema = makeSchema();
export const ConfigurationOptionUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionUncheckedCreateInput.schema.js.map