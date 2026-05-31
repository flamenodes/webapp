import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../../enums/ConfigurationOptionType.schema';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ConfigurationOptionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    label: z.string(),
    description: z.string().optional().nullable(),
    type: ConfigurationOptionTypeSchema,
    required: z.boolean(),
    category: ProductCategorySchema,
    sortOrder: z.number().int(),
    values: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ConfigurationOptionInputType = z.infer<typeof ConfigurationOptionInputSchema>;
