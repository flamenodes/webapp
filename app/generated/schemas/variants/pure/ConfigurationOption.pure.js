import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ConfigurationOptionModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    description: z.string().nullable(),
    type: ConfigurationOptionTypeSchema,
    required: z.boolean(),
    category: ProductCategorySchema,
    sortOrder: z.number().int(),
    values: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=ConfigurationOption.pure.js.map